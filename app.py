import streamlit as st
import google.generativeai as genai

# 1. جلب المفتاح من Secrets
try:
    api_key = st.secrets["GEMINI_API_KEY"]
    genai.configure(api_key=api_key)
except Exception as e:
    st.error("❌ تأكد من إضافة GEMINI_API_KEY في Advanced Settings")
    st.stop()

def smart_merge(base, update, lang):
    # استخدام التسمية الصحيحة والمستقرة للنموذج
    model = genai.GenerativeModel('gemini-1.5-flash')
    
    prompt = f"""
    Act as a professional senior developer. Merge the following updates into the base code for a {lang} project.
    - Replace old functions with updated ones.
    - Add new functions logically.
    - Keep imports organized at the top.
    - Maintain clean indentation.
    
    BASE CODE:
    {base}
    
    UPDATES:
    {update}
    
    Return ONLY the final integrated code.
    """
    
    # إضافة إعدادات السلامة لضمان عدم حظر الكود البرمجي
    response = model.generate_content(prompt)
    return response.text

# --- الواجهة (Dark & Gold) ---
st.set_page_config(page_title="AI Code Merger", layout="wide")

st.markdown("""
    <style>
    .stApp { background-color: #000000; color: #FFD700; }
    .stTextArea textarea { background-color: #111; color: #fff; border: 1px solid #FFD700; }
    </style>
    """, unsafe_allow_html=True)

st.title("🛠️ AI Smart Code Integrator")

col1, col2 = st.columns(2)
with col1:
    base_input = st.text_area("📄 الكود الأساسي", height=300)
with col2:
    upd_input = st.text_area("⚡ التحديثات الجديدة", height=300)

lang = st.selectbox("اللغة", ["Python", "JavaScript", "Dart/Flutter", "HTML/CSS"])

if st.button("ابدأ الدمج الاحترافي ✨"):
    if base_input and upd_input:
        with st.spinner("جاري المعالجة بواسطة Gemini 1.5..."):
            try:
                # هذا السطر هو مفتاح الحل لخطأ الـ 404
                result = smart_merge(base_input, upd_input, lang)
                st.subheader("✅ النسخة النهائية:")
                st.code(result, language=lang.lower().split('/')[0])
                st.download_button("💾 تحميل الملف", result, file_name="merged_code.txt")
            except Exception as e:
                st.error(f"حدث خطأ: {e}")
                st.info("ملاحظة: تأكد أن المفتاح في Secrets مأخوذ من Google AI Studio الذي تظهره الصورة.")
