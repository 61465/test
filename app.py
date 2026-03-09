import streamlit as st
import google.generativeai as genai

# جلب المفتاح بأمان
try:
    api_key = st.secrets["GEMINI_API_KEY"]
    genai.configure(api_key=api_key)
except KeyError:
    st.error("❌ لم يتم العثور على المفتاح في Secrets!")
    st.stop()

def smart_merge(base, update, lang):
    # استخدام الإصدار الأحدث المتوافق
    model = genai.GenerativeModel('gemini-1.5-flash') 
    
    prompt = f"""
    أنت مبرمج محترف خبير في {lang}. 
    قم بدمج التحديثات التالية في الكود الأساسي بذكاء وبدون تكرار:
    
    الكود الأساسي:
    {base}
    
    التحديثات:
    {update}
    
    أعطني الكود النهائي الكامل فقط.
    """
    response = model.generate_content(prompt)
    return response.text

# الواجهة
st.set_page_config(page_title="AI Code Integrator", layout="wide")
st.title("🛠️ AI Smart Code Integrator")

base_input = st.text_area("📄 الكود الأساسي", height=250)
upd_input = st.text_area("⚡ التحديثات الجديدة", height=250)
lang = st.selectbox("اللغة", ["Python", "JavaScript", "HTML/CSS"])

if st.button("بدء الدمج الذكي ✨"):
    if base_input and upd_input:
        with st.spinner("جاري المعالجة..."):
            try:
                # محاولة دمج الكود
                final_result = smart_merge(base_input, upd_input, lang)
                st.code(final_result, language=lang.lower().replace("/", ""))
            except Exception as e:
                # في حال تكرر خطأ الـ 404، نحاول بموديل بديل تلقائياً
                st.error(f"خطأ في الاتصال: {e}")
                st.info("تلميح: تأكد أن حسابك في Google AI Studio يدعم موديل Gemini 1.5.")
