import streamlit as st
import google.generativeai as genai

# التعديل الأساسي: جلب المفتاح بأمان من Secrets
try:
    api_key = st.secrets["GEMINI_API_KEY"]
    genai.configure(api_key=api_key)
except KeyError:
    st.error("❌ لم يتم العثور على المفتاح! يرجى التأكد من إضافة GEMINI_API_KEY في Advanced Settings.")
    st.stop()

def smart_merge(base, update, lang):
    model = genai.GenerativeModel('gemini-1.5-flash')
    prompt = f"""
    أنت مبرمج محترف خبير في {lang}. 
    لديك كود أساسي (Base Code) وتحديثات جديدة (Updates).
    مهمتك هي دمج التحديثات داخل الكود الأساسي بذكاء:
    1. استبدل الدوال القديمة بالنسخ المحدثة.
    2. أضف الدوال الجديدة في مكانها المنطقي.
    3. ادمج المكتبات (Imports) في الأعلى دون تكرار.
    4. حافظ على تنسيق الكود والتعليقات والمسافات (Indentation).
    
    الكود الأساسي:
    {base}
    
    التحديثات:
    {update}
    
    أعطني الكود النهائي الكامل فقط بدون أي شرح أو كلام جانبي.
    """
    response = model.generate_content(prompt)
    return response.text

# --- واجهة المستخدم (تنسيق Game Zone المفضل) ---
st.set_page_config(page_title="AI Code Integrator", layout="wide")

# لمسة جمالية للواجهة (Dark Mode)
st.markdown("""
    <style>
    .stApp { background-color: #0e1117; color: white; }
    .stTextArea textarea { background-color: #1a1a1a; color: #00ff00; border: 1px solid #FFD700; }
    .stButton button { background-color: #FFD700; color: black; font-weight: bold; }
    </style>
    """, unsafe_allow_html=True)

st.title("🛠️ AI Smart Code Integrator")
st.write("ادمج تحديثاتك برمجياً بذكاء المحترفين")

col1, col2 = st.columns(2)
with col1:
    base_input = st.text_area("📄 الكود الأساسي (Base Code)", height=350, placeholder="انسخ الكود الحالي هنا...")
with col2:
    upd_input = st.text_area("⚡ التحديثات الجديدة (Updates)", height=350, placeholder="انسخ التحديثات أو الدوال الجديدة هنا...")

lang = st.selectbox("لغة البرمجة", ["Python", "JavaScript", "Dart", "HTML/CSS"])

if st.button("بدء الدمج الذكي ✨"):
    if base_input and upd_input:
        with st.spinner("جاري تحليل ودمج الأكواد..."):
            try:
                final_result = smart_merge(base_input, upd_input, lang)
                st.subheader("✅ النسخة النهائية المدمجة:")
                st.code(final_result, language=lang.lower().replace("/", ""))
                st.download_button("💾 تحميل الملف النهائي", final_result, file_name="merged_code.txt")
            except Exception as e:
                st.error(f"حدث خطأ أثناء الاتصال بالذكاء الاصطناعي: {e}")
    else:
        st.warning("يرجى التأكد من ملء حقول الأكواد أولاً.")
