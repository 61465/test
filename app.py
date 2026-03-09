import streamlit as st
import google.generativeai as genai

# إعداد مفتاح الـ API (يفضل وضعه في Secrets)
genai.configure(api_key="YOUR_GEMINI_API_KEY")

def smart_merge(base, update, lang):
    model = genai.GenerativeModel('gemini-1.5-flash')
    prompt = f"""
    أنت مبرمج محترف خبير في {lang}. 
    لديك كود أساسي (Base Code) وتحديثات جديدة (Updates).
    مهمتك هي دمج التحديثات داخل الكود الأساسي بذكاء:
    1. استبدل الدوال القديمة بالنسخ المحدثة.
    2. أضف الدوال الجديدة في مكانها المنطقي.
    3. ادمج المكتبات (Imports) في الأعلى دون تكرار.
    4. حافظ على تنسيق الكود والتعليقات.
    
    الكود الأساسي:
    {base}
    
    التحديثات:
    {update}
    
    أعطني الكود النهائي الكامل فقط بدون شرح.
    """
    response = model.generate_content(prompt)
    return response.text

# --- واجهة المستخدم (Streamlit) ---
st.set_page_config(page_title="AI Code Merger", layout="wide")

st.title("🛠️ AI Smart Code Integrator")
st.write("ادمج تحديثاتك برمجياً بضغطة زر")

col1, col2 = st.columns(2)
with col1:
    base = st.text_area("الكود القديم", height=300, placeholder="انسخ الكود الحالي هنا...")
with col2:
    upd = st.text_area("التحديثات الجديدة", height=300, placeholder="انسخ التحديثات أو الدوال الجديدة هنا...")

lang = st.selectbox("لغة البرمجة", ["Python", "JavaScript", "Dart", "HTML/CSS"])

if st.button("دمج واحترافية عالية ✨"):
    if base and upd:
        with st.spinner("جاري الدمج وتحسين الكود..."):
            try:
                final_result = smart_merge(base, upd, lang)
                st.subheader("النسخة النهائية الجاهزة:")
                st.code(final_result, language=lang.lower())
                st.download_button("تحميل الملف المدمج", final_result, file_name="final_code.txt")
            except Exception as e:
                st.error(f"حدث خطأ أثناء الدمج: {e}")
    else:
        st.warning("يرجى ملء الحقول المطلوبة.")
