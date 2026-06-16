
        // Translation Object
        const i18n = {
            ar: {
                nav_title: "بيئة العمل التفاعلية للوكلاء الذكية",
                system_status: "حالة النظام: نشط // لوحة العمل 2026",
                bot_status_idle: "في انتظار مدخلاتك",
                bot_status_thinking: "تحليل وتفكير...",
                bot_status_done: "تم التفكير",
                bot_speech_welcome: "مرحباً بك! أنا الوكيل المساعد التفاعلي. تصفح الأقسام لاستكشاف التغييرات، أو اسألني أي سؤال حول منهجية هندسة الوكلاء الذكية.",
                bot_speech_scroll_hero: "أهلاً بك! لقد بدأت قراءة الملخص. هنا نستعرض كيف تتحول البرمجة من مجرد قواعد نحوية لكتابة الكود إلى تحقيق أهداف المطورين الحقيقية.",
                bot_speech_scroll_harness: "انظر للمجسم ثلاثي الأبعاد! هذا يمثل هيكلة هندسة السياق. القفص الخارجي يمثل بيئة التشغيل أو الـ Harness (~90%) والتي تحتوي على كل ضوابط الأمان.",
                bot_speech_scroll_loop: "هذه حلقة تصحيح الأخطاء الذاتية للوكيل! اضغط على الخطوات أو زر التشغيل التلقائي لمشاهدة كيف يقوم الوكيل بفحص مخرجات كودك وتصليحه بمفرده.",
                bot_speech_scroll_playground: "سيناريوهات هامة: لتأمين الأنظمة البرمجية نحتاج إلى قيود صارمة للغاية. انظر لمختبر الكود كيف يكشف الثغرات ويقوم الوكيل المساعد بحلها تلقائياً.",
                bot_speech_scroll_modality: "الخطوة الأخيرة: يمكنك العمل بصفتك قائد أوركسترا (Orchestrator) وتوجيه وكلاء فرعيين لتنفيذ المشروع في الخلفية أو بصفتك موجه لحظي (Conductor).",
                thinking_process: "مسار تفكير الوكيل:",
                cot_1: "تحليل المعطيات والنوايا لطلب المستخدم...",
                cot_2: "فحص السياق الأمني والقواعد الإرشادية...",
                cot_3: "صياغة الاستجابة التعليمية الملائمة وعرضها...",
                btn_inspect_harness: "فحص بيئة التشغيل",
                btn_run_loop: "تشغيل حلقة الوكيل",
                btn_sandbox_audit: "مختبر الكود الأمني",
                btn_visual_orch: "مخطط الوكلاء الفرعيين",
                chat_placeholder: "اسأل الوكيل عن هندسة الوكلاء...",
                send_btn: "إرسال",
                hero_badge: "المرحلة الأولى: منظومة تطوير البرمجيات الجديدة (SDLC)",
                hero_title_1: "محاكاة الانتقال من",
                hero_title_gradient: "كتابة الأكواد إلى صياغة الأهداف",
                hero_desc: "أهلاً بك في عام 2026. الفجوة بين نية المبرمج وتنفيذ الآلة تتلاشى تماماً. استكشف لوحات التحكم التفاعلية أدناه لمشاهدة استقلالية الوكلاء الأذكياء في الوقت الفعلي.",
                vis1_badge: "محاكاة تفاعلية ثلاثية الأبعاد 01",
                vis1_title: "بنية هندسة بيئة التشغيل (Harness)",
                vis1_desc: "النموذج اللغوي هو مجرد محرك خام. ولكي يصبح وكيلاً ذكياً، يحتاج إلى بيئة تشغيل (Harness) توفر سياق العمل، وصلاحيات التنفيذ، والقيود الصارمة.",
                vis1_formula: "المعادلة:",
                harness_constraints: "تخصيص قيود بيئة التشغيل (Harness Constraints):",
                harness_parameters: "محددات النموذج (Model Parameters):",
                slider_temp: "درجة الحرارة (AI Temperature)",
                slider_guardrails: "صرامة الحماية (Guardrails Strictness)",
                slider_context: "نافذة السياق (Context Window)",
                harness_status_strict: "حالة البيئة: نظام الاحتواء الشامل للنموذج بنطاق 360 درجة فعال وآمن.",
                harness_status_decay: "حالة البيئة: تم رصد خلل في قيود الاحتواء. المخاطر الأمنية ترتفع تدريجياً.",
                harness_status_danger: "🚨 خطر: تم إلغاء كافة حواجز الحماية! النموذج يعمل دون أي مراقبة أو تأمين.",
                outer_harness_label: "القفص الخارجي (Harness) ~90%",
                inner_model_label: "النموذج الداخلي (LLM) ~10%",
                hover_3d_tip: "💡 مرر الماوس هنا لتدوير المشهد ثلاثي الأبعاد",
                vis2_badge: "محاكاة تفاعلية 02",
                vis2_title: "حلقة الوكيل ذاتية التصحيح (Self-Correcting Loop)",
                vis2_desc: "على عكس برمجيات المحادثة التقليدية، يمتلك الوكيل الذكي دورة تشغيل مغلقة ومستقلة: الإدراك، التخطيط، التنفيذ، المراقبة، التكرار.",
                autoplay_run: "تشغيل الدورة التلقائية",
                autoplay_pause: "إيقاف الدورة مؤقتاً",
                reset_btn: "إعادة ضبط",
                terminal_header: "الطرفية: cloud-agent-executor",
                vis3_badge: "مختبر أكواد تفاعلي 03",
                vis3_title: "مختبر الكود الأمني ومحاكي الاختبارات",
                vis3_desc: "فكرة أن المطورين يبنون البرمجيات بالاعتماد على الفايب والحدس فقط من دون قيود تشكل تهديداً كبيراً. في هندسة الوكلاء الذكية، نضع قيود اختبارية صارمة يعاد تشغيلها وتصحيح الكود بناءً عليها.",
                select_scenario: "اختر سيناريو الاختبار:",
                vulnerability_title: "مخاطر البرمجة الحدسية (Vibe Coding Risk):",
                stripe_vuln_desc: "استلام الفعاليات المالية مباشرة من الـ Webhook بدون مقارنة توقيع التوثيق. يتيح للمهاجمين تزوير البيانات والحصول على اشتراكات مجانية بالكامل.",
                sql_vuln_desc: "استقبال معرف المستخدم مباشرة وتضمينه بعبارات الاستعلام دون تنظيف للرموز. يسهل استغلاله لحقن أوامر قاعدة البيانات وسرقة كل السجلات الحساسة.",
                rate_vuln_desc: "سماح للمستخدم بالوصول إلى نقطة الاتصال دون أي نظام للحد من الطلبات الكثيفة. يسهل إيقاف الخادم بالكامل بهجمات حجب الخدمة (DDoS).",
                vibe_code_btn: "كود الفايب غير الآمن",
                agentic_code_btn: "كود الوكيل المؤمن بالكامل",
                run_test_btn: "تشغيل اختبارات الأمان",
                magic_fix_btn: "🪄 دع الوكيل يصلح الكود تلقائياً",
                test_output_header: "مخرجات الطرفية: security_runner.sh",
                console_init_msg: "اضغط على زر \"تشغيل اختبارات الأمان\" لبدء محاكاة الفحص داخل حاوية المطور...",
                vis4_badge: "بيئة المزامنة والجدولة 04",
                vis4_title: "وضعية المايسترو (Conductor) أو المنسق (Orchestrator)",
                vis4_desc: "يتحول دور المطور البشري تدريجياً من الكتابة الحرفية للتعليمات البرمجية، إلى توجيه وبناء الأنظمة ومراجعة النواتج عالية الجودة.",
                mod_cond_title: "🎻 وضعية المايسترو (Conductor)",
                mod_orch_title: "🛸 وضعية المنسق (Orchestrator)",
                cond_head: "توجيه مباشر وتفاعل لحظي (IDE Synchronous)",
                cond_desc: "أنت تعمل جنباً إلى جنب مع مساعد ذكي مدمج داخل محرر الأكواد الخاص بك. تقوم بكتابة التوجيهات ويقوم هو بكتابة الأكواد وتكملتها أمام عينيك بشكل متزامن وبإشرافك المباشر.",
                ide_typing: "الذكاء الاصطناعي يكتب الآن...",
                cond_footer: "حالة بيئة التطوير: جاهز للمزامنة اللحظية",
                orch_head: "التفويض الذاتي لوكلاء متعددين (Async Trajectory)",
                orch_desc: "أنت تعمل كمدير يشرف على المشروع. تقوم بكتابة الهدف العام ويقوم وكلاء فرعيون متعددون بالعمل معاً في الخلفية لحل المشكلات البرمجية، وبناء الواجهة، وتجهيز الاختبارات تلقائياً.",
                orch_footer: "حالة الوكيل المنسق: يعمل بكامل استقلاليته في الخلفية",
                agent_logs_title: "سجل أعمال الوكلاء الفرعيين النشطين (Subagents Logs):",
                bot_speech_scroll_mcp: "مرحباً بك في مركز MCP! هنا يستطيع الوكيل استدعاء أدوات خارجية وقواعد بيانات باستخدام بروتوكول موحد. انقر فوق أزرار المحاكاة لمشاهدة رسائل الـ JSON-RPC 2.0.",
                bot_speech_scroll_a2ui: "هنا قسم الـ A2UI! اكتب طلباً بسيطاً أو اختر أحد النماذج المسبقة، وشاهد كيف يقوم الوكيل بكتابة كود واجهة مستخدم وعرضه حياً أمامك.",
                bot_speech_scroll_payments: "المدفوعات من آلة لآلة (AP2)! تستخدم الوكلاء محافظ رقمية لدفع تكاليف الـ APIs. جرّب تشغيل طلب API مدفوع، وشاهد نظام التفويض البشري عند المبالغ الكبيرة.",
                vis5_badge: "بروتوكول سياق النموذج والتعاون البيني 05",
                vis5_title: "مركز بروتوكول سياق النموذج (MCP Hub) والتعاون المشترك",
                vis5_desc: "يسمح بروتوكول MCP للنماذج بالاتصال الآمن بمصادر البيانات والأدوات الخارجية (مثل قواعد البيانات، أو محركات البحث، أو الملفات المحلية) بشكل موحد.",
                mcp_host_label: "المستضيف (MCP Host / IDE):",
                mcp_client_label: "العميل (MCP Client):",
                mcp_server_label: "الخادم (MCP Server):",
                mcp_server_list_desc: "يتيح خادم MCP مجموعة من الأدوات التي يمكن للنموذج استكشافها واستخدامها.",
                mcp_tools_discovery_btn: "كشف الأدوات (Discovery Payload)",
                mcp_call_tool_btn: "محاكاة استدعاء أداة (Execute Tool)",
                mcp_rpc_terminal_header: "مراقب اتصالات MCP: JSON-RPC 2.0 Payload",
                a2a_badge: "التعاون بين الوكلاء 06",
                a2a_title: "منظومة التنسيق المشترك والتعاون بين الوكلاء (A2A)",
                a2a_desc: "محاكاة تفاعلية للاتصال المباشر وتبادل المهام بين وكيل منسق (Coordinator) ووكلاء فرعيين متخصصين.",
                a2a_route_task_btn: "توجيه مهمة للوكلاء الفرعيين",
                a2a_console_header: "طرفية الاتصالات البينية للوكلاء (A2A Event Stream)",
                a2ui_badge: "توليد واجهات المستخدم للوكلاء 07",
                a2ui_title: "مولد واجهات المستخدم الديناميكي للوكيل (A2UI Sandbox)",
                a2ui_desc: "اكتب طلباً للوكيل لمشاهدة كيف يقوم ببناء مكون واجهة مستخدم (UI component) وتوليد الكود وعرضه حياً داخل نافذة معزولة.",
                a2ui_prompt_placeholder: "مثال: اكتب 'خريطة مبيعات'، أو 'بطاقة مستخدم'، أو 'لوحة تحكم'...",
                a2ui_build_btn: "توليد وعرض الواجهة",
                a2ui_editor_header: "محرر الكود المولد (Live Generated Code)",
                a2ui_preview_header: "معاينة الواجهة الحية (A2UI Live Preview)",
                ap2_badge: "المدفوعات الآلية للوكلاء 08",
                ap2_title: "بروتوكول الدفع الموحد بين الوكلاء والآلات (AP2/UCP)",
                ap2_desc: "يتيح للوكلاء دفع تكاليف استهلاك الـ APIs ومصادر الحوسبة بشكل مؤتمت باستخدام المحافظ الرقمية للمصغرات المالية.",
                ap2_wallet_balance: "رصيد المحفظة النشط:",
                ap2_run_billing_btn: "محاكاة مكالمة مدفوعة للـ API ($0.15)",
                ap2_run_billing_btn_heavy: "تشغيل تحليل عميق للمشروع ($2.50)",
                ap2_billing_console: "سجل معاملات محفظة الوكيل (AP2 Micro-Transactions Ledger)",
                btn_inspect_mcp: "🔌 مركز أدوات MCP",
                btn_dynamic_a2ui: "🎨 مولد الواجهات A2UI",
                btn_ap2_payments: "💳 محفظة الوكيل AP2"
            },
            en: {
                nav_title: "Interactive Agentic Workspace",
                system_status: "SYSTEM_STATUS: ACTIVE // GOOGLE_WHITEBOARD_2026",
                bot_status_idle: "AWAITING_INPUT",
                bot_status_thinking: "REASONING_AND_THINKING",
                bot_status_done: "REASONING_DONE",
                bot_speech_welcome: "Hello! I am your interactive companion agent. Scroll to explore, choose an action below, or ask me anything about the Agentic Engineering curriculum!",
                bot_speech_scroll_hero: "Hello! We are starting the Unit 1 summary. Here we explore how modern code development shifts completely from rigid grammar syntax to human intent expression!",
                bot_speech_scroll_harness: "Look at the 3D grid! This visualizes context engineering. The outer wireframe box represents the Harness (~90% of the agent system). It contains tools, sandboxes, and safe boundaries!",
                bot_speech_scroll_loop: "Now we observe the autonomous loop simulation! Click the steps or autoplay to see how agents self-diagnose inside terminal pipelines until your constraints are successfully met.",
                bot_speech_scroll_playground: "Crucial lesson: High-stakes architectures require disciplined engineering. Witness the sandbox runner analyzing code security and fixing flaws dynamically.",
                bot_speech_scroll_modality: "Final milestone: You can act as a Conductor directing code blocks live, or as an Orchestrator delegating multi-agent pipelines asynchronously while you focus on high-level designs!",
                thinking_process: "Agent Thinking Process:",
                cot_1: "Analyzing input parameters and user query intent...",
                cot_2: "Scanning context constraints and system guidelines...",
                cot_3: "Formulating optimal educational feedback...",
                btn_inspect_harness: "Inspect Harness",
                btn_run_loop: "Run Agent Loop",
                btn_sandbox_audit: "Sandbox Code Audit",
                btn_visual_orch: "Subagents Flow",
                chat_placeholder: "Ask the agent a question...",
                send_btn: "Send",
                hero_badge: "Unit 1: The New SDLC Ecosystem",
                hero_title_1: "Simulating the Shift from",
                hero_title_gradient: "Syntax to Intent",
                hero_desc: "Welcome to 2026. The friction between human intent and machine execution is collapsing. Explore the interactive visual harnesses below to witness agent autonomy in real-time.",
                vis1_badge: "VISUALIZATION 01",
                vis1_title: "Harness Engineering Architecture",
                vis1_desc: "The model is merely the raw engine. It becomes an agent once the Harness provides context policies, execution environments, and enforceable constraints.",
                vis1_formula: "Formula:",
                harness_constraints: "Configure Harness Constraints:",
                harness_parameters: "Model Parameters:",
                slider_temp: "AI Temperature",
                slider_guardrails: "Guardrails Strictness",
                slider_context: "Context Window",
                harness_status_strict: "Harness status: Strict 360-degree model containment active.",
                harness_status_decay: "Harness status: Structural containment decay identified. Risks increasing.",
                harness_status_danger: "🚨 DANGER: ALL BOUNDARIES REMOVED. MODEL RUNNING UNPROTECTED.",
                outer_harness_label: "Outer Harness (~90%)",
                inner_model_label: "Inner Model (~10%)",
                hover_3d_tip: "💡 Hover mouse here to rotate 3D canvas",
                vis2_badge: "VISUALIZATION 02",
                vis2_title: "The Self-Correcting Agent Loop",
                vis2_desc: "Unlike traditional chatbots, autonomous agents run their own loop: Perceive, Plan, Act, Observe, Iterate.",
                autoplay_run: "Run Auto Cycle",
                autoplay_pause: "Pause Auto Cycle",
                reset_btn: "Reset",
                terminal_header: "TERMINAL: cloud-agent-executor",
                vis3_badge: "INTERACTIVE PLAYGROUND 03",
                vis3_title: "Interactive Sandbox & Test Runner",
                vis3_desc: "Telling stakeholders you build on raw vibe-coding raises alarms. Disciplined engineering integrates test harnesses that evaluate parameters before any deployment.",
                select_scenario: "Select Test Scenario:",
                vulnerability_title: "Vibe Coding Financial Risk:",
                stripe_vuln_desc: "Unverified code accepts Stripe webhook events without validation signatures. Malicious actors can easily forge payloads and trigger fake free subscriptions.",
                sql_vuln_desc: "Receiving user input directly and embedding it into the query string without sanitization. An attacker can inject query commands and dump critical DB databases.",
                rate_vuln_desc: "Endpoint does not throttle clients or requests. A malicious script can trigger thousands of heavy jobs simultaneously, crashing the node container.",
                vibe_code_btn: "Insecure Vibe Code",
                agentic_code_btn: "Secure Agentic Code",
                run_test_btn: "Run Security Tests",
                magic_fix_btn: "🪄 Let Agent Auto-Fix Code",
                test_output_header: "CONSOLE OUTPUT: security_runner.sh",
                console_init_msg: "Click \"Run Security Tests\" to start simulation testing in the developer container...",
                vis4_badge: "SCHEDULING & PARALLEL WORKSPACE 04",
                vis4_title: "Conductor or Orchestrator Workspaces",
                vis4_desc: "The developer's role transforms from line-by-line code authoring to system manager and high-leverage delegator.",
                mod_cond_title: "🎻 Conductor Modality",
                mod_orch_title: "🛸 Orchestrator Modality",
                cond_head: "Hands-on, Real-time Direction (IDE Synchronous)",
                cond_desc: "You work hand-in-hand with an AI assistant directly inside code editors. You prompt edits, watch inline code suggestions appear instantly, and maintain granular keystroke-level authority.",
                ide_typing: "AI is typing...",
                cond_footer: "IDE ENVIRONMENT STATUS: SYNC_READY",
                orch_head: "Async Multi-Agent Delegation (Async Trajectory)",
                orch_desc: "You act as a supervisor configuring goal paths and evaluation bounds. Background tasks run autonomously across multiple repositories inside sandbox servers, producing whole pull requests ready for audit.",
                orch_footer: "BACKGROUND AGENT STATUS: RUNNING_IN_ISOLATION",
                agent_logs_title: "Active Subagents Working Logs:",
                bot_speech_scroll_mcp: "Welcome to the MCP & A2A Hub! Watch how agents connect to local tools and coordinate sub-tasks. Click the discovery/call buttons to inspect live JSON-RPC 2.0 payloads.",
                bot_speech_scroll_a2ui: "This is the A2UI sandbox! Prompt the agent or select a template, and watch it draft responsive markup inline and render it instantly inside the preview box.",
                bot_speech_scroll_payments: "Machine-to-Machine Payments (AP2)! Agents use digital micro-wallets to purchase compute/API resources. Try running a call, and approve the consent prompt for high-value requests.",
                vis5_badge: "MODEL CONTEXT PROTOCOL & A2A 05",
                vis5_title: "Model Context Protocol (MCP) Hub & Collaboration",
                vis5_desc: "The Model Context Protocol (MCP) allows models to securely connect to external tools and data sources (like databases, files, or APIs) in a standardized manner.",
                mcp_host_label: "MCP Host (IDE):",
                mcp_client_label: "MCP Client:",
                mcp_server_label: "MCP Server:",
                mcp_server_list_desc: "The MCP Server exposes tools that the LLM can discover and run dynamically.",
                mcp_tools_discovery_btn: "Discovery Payload (tools/list)",
                mcp_call_tool_btn: "Execute Tool (tools/call)",
                mcp_rpc_terminal_header: "MCP Monitor: JSON-RPC 2.0 Payloads",
                a2a_badge: "A2A COLLABORATION 06",
                a2a_title: "Agent-to-Agent Coordination (A2A)",
                a2a_desc: "Simulate multi-agent delegation where a main Coordinator Agent delegates objectives to specialized sub-agents.",
                a2a_route_task_btn: "Delegate Task to Subagents",
                a2a_console_header: "A2A Inter-Agent Console (A2A Event Stream)",
                a2ui_badge: "AGENT-TO-USER INTERFACE 07",
                a2ui_title: "Agent-to-User Interface (A2UI) Sandbox",
                a2ui_desc: "Prompt the agent to generate a UI element. See the React/HTML code typed out and watch it render live inside the container sandbox.",
                a2ui_prompt_placeholder: "e.g., 'sales chart', 'user card', or 'metric dashboard'...",
                a2ui_build_btn: "Build & Render UI",
                a2ui_editor_header: "Live Generated Code",
                a2ui_preview_header: "A2UI Live Preview",
                ap2_badge: "MACHINE-TO-MACHINE PAYMENTS 08",
                ap2_title: "M2M Agent Payments (AP2 / UCP)",
                ap2_desc: "Allows autonomous agents to purchase computing capacity or third-party API keys using micro-wallets and authorization rules.",
                ap2_wallet_balance: "Active Wallet Balance:",
                ap2_run_billing_btn: "Simulate API Call ($0.15)",
                ap2_run_billing_btn_heavy: "Run Deep Reasoning Task ($2.50)",
                ap2_billing_console: "AP2 Micro-Transactions Ledger",
                btn_inspect_mcp: "🔌 MCP Hub & Tools",
                btn_dynamic_a2ui: "🎨 A2UI UI Generator",
                btn_ap2_payments: "💳 AP2 Agent Wallet"
            }
        };

        // Current UI state
        let currentLang = 'ar';
        const activeTools = { sandbox: true, mcp: true, evals: true };

        // Language Switcher Logic
        function toggleLanguage() {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            
            // Set HTML lang and dir attributes
            document.documentElement.lang = currentLang;
            document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
            
            // Toggle body class and fonts order
            if (currentLang === 'en') {
                document.body.style.fontFamily = "'Plus Jakarta Sans', 'Cairo', sans-serif";
                document.getElementById('lang-btn-text').innerText = 'العربية';
            } else {
                document.body.style.fontFamily = "'Cairo', 'Plus Jakarta Sans', sans-serif";
                document.getElementById('lang-btn-text').innerText = 'English';
            }

            // Translate all elements with [data-i18n]
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (i18n[currentLang][key]) {
                    el.style.opacity = 0;
                    setTimeout(() => {
                        el.innerHTML = i18n[currentLang][key];
                        el.style.opacity = 1;
                    }, 100);
                }
            });

            // Update placeholders
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (i18n[currentLang][key]) {
                    el.placeholder = i18n[currentLang][key];
                }
            });

            // Re-render variable text parts
            updateHarness3D();
            updateSandboxContent();
            updateModalityContents();
            if (typeof updateWalletDisplay === 'function') {
                updateWalletDisplay();
            }
        }

        // --- 1. 3D Interaction & Sliders Logic ---
        const scene = document.getElementById('threeDScene');
        const harness = document.getElementById('harnessScene');
        const innerCube = document.getElementById('innerCube');

        if(scene && harness) {
            scene.addEventListener('mousemove', (e) => {
                const rect = scene.getBoundingClientRect();
                const x = e.clientX - rect.left; 
                const y = e.clientY - rect.top;
                const xAxis = (rect.width / 2 - x) / 8; 
                const yAxis = (rect.height / 2 - y) / 8;
                harness.style.transform = `rotateY(${-xAxis + 25}deg) rotateX(${yAxis - 20}deg)`;
                if (innerCube) {
                    innerCube.style.transform = `rotateY(${-xAxis * 1.5}deg) rotateX(${yAxis * 1.5}deg)`;
                }
            });
            scene.addEventListener('mouseleave', () => {
                harness.style.transform = 'rotateY(25deg) rotateX(-20deg)';
                if (innerCube) {
                    innerCube.style.transform = 'none';
                }
            });
        }

        function toggleHarnessTool(toolKey, btn) {
            activeTools[toolKey] = !activeTools[toolKey];
            
            if (activeTools[toolKey]) {
                btn.className = "px-3 py-1.5 rounded-lg text-xs bg-indigo-600 text-white font-medium border border-indigo-400/30 transition-all cursor-pointer";
                btn.innerText = "✓ " + (toolKey==='sandbox'?"Sandbox OS":toolKey==='mcp'?"MCP Protocols":"Eval Judges");
            } else {
                btn.className = "px-3 py-1.5 rounded-lg text-xs bg-slate-900 text-slate-500 font-medium border border-slate-800 transition-all cursor-pointer";
                btn.innerText = "✕ " + (toolKey==='sandbox'?"Sandbox OS":toolKey==='mcp'?"MCP Protocols":"Eval Judges");
            }
            
            updateHarness3D();
        }

        function updateHarness3D() {
            const temp = parseFloat(document.getElementById('slider-temp').value);
            const guard = parseInt(document.getElementById('slider-guard').value);
            const context = parseInt(document.getElementById('slider-context').value);

            document.getElementById('temp-val').innerText = temp.toFixed(1);
            document.getElementById('guard-val').innerText = guard + '%';
            document.getElementById('context-val').innerText = context >= 1000 ? (context/1000).toFixed(1) + 'M' : context + 'k';

            // 1. Temperature affects cube spin animation speed/bounce
            const spinDuration = 6 / temp;
            innerCube.style.animation = `float ${spinDuration}s ease-in-out infinite`;

            // 2. Context Window scale size of inner cube
            const scale = 0.5 + (context / 2000) * 0.7; // maps Context limit size to 0.5 - 1.2
            innerCube.style.transform = `scale(${scale})`;

            // 3. Guardrails Strictness affects thickness and color glow of outer harness
            const opacity = 0.1 + (guard / 100) * 0.7; // background transparency
            const borderOpacity = 0.2 + (guard / 100) * 0.8;
            const borderDashedStyle = guard > 70 ? 'dashed' : guard > 30 ? 'dashed' : 'solid';
            
            let strokeColor = `rgba(167, 139, 250, ${borderOpacity})`; // default indigo
            let bgHarness = `rgba(167, 139, 250, ${opacity * 0.1})`;
            
            const activeCount = Object.values(activeTools).filter(Boolean).length;
            const statusText = document.getElementById('harness-status-text');

            if (guard === 0 || activeCount === 0) {
                strokeColor = `rgba(244, 63, 94, ${borderOpacity})`; // critical rose red
                bgHarness = `rgba(244, 63, 94, 0.05)`;
                statusText.innerHTML = i18n[currentLang].harness_status_danger;
                statusText.className = "text-[11px] text-rose-500 font-mono mt-2 font-bold animate-pulse";
            } else if (guard < 50 || activeCount < 3) {
                strokeColor = `rgba(245, 158, 11, ${borderOpacity})`; // warning orange
                bgHarness = `rgba(245, 158, 11, 0.03)`;
                statusText.innerHTML = i18n[currentLang].harness_status_decay;
                statusText.className = "text-[11px] text-amber-400 font-mono mt-2";
            } else {
                statusText.innerHTML = i18n[currentLang].harness_status_strict;
                statusText.className = "text-[11px] text-indigo-400 font-mono mt-2";
            }

            const faces = ['front', 'back', 'right', 'left', 'top', 'bottom'];
            faces.forEach(f => {
                const el = document.getElementById(`hface-${f}`);
                if (el) {
                    el.style.borderColor = strokeColor;
                    el.style.backgroundColor = bgHarness;
                    el.style.borderStyle = borderDashedStyle;
                    el.style.borderWidth = `${1 + (guard / 100) * 2}px`;
                }
            });
        }

        // --- 2. Live Agent Loop Simulator ---
        const stepsData = {
            perceive: {
                latency: "LATENCY: 12ms // MODEL: GEMINI-3.5",
                logs: {
                    ar: [`<span class="text-indigo-400 font-bold">&gt; [بدء التشغيل] إطلاق حاقن مراقبة الحاوية...</span>`, `يقوم الوكيل بتحليل المدخل البشري: <span class="text-indigo-300 italic">"أتمتة الكود وحل المشكلة الحالية"</span>. يقوم بتنزيل ملفات المشروع داخل Sandbox معزول تماماً ومحمي.`],
                    en: [`<span class="text-indigo-400 font-bold">&gt; [INIT] launching background container monitor...</span>`, `The agent ingests human intent specification: <span class="text-indigo-300 italic">"Automate and secure the active codebase."</span> It configures parameters and spins up the safe sandbox execution workspace.`]
                }
            },
            plan: {
                latency: "LATENCY: 48ms // PLANNING_AGENT",
                logs: {
                    ar: [`<span class="text-amber-400 font-bold">&gt; [تخطيط] صياغة خطوات المسار ومراجعة المخرجات...</span>`, `&gt; الخطوة 1: فحص قاعدة الأكواد ومنافذ الدخل السريعة.<br>&gt; الخطوة 2: صياغة حزم الاختبار للمصادقة.<br>&gt; الخطوة 3: تحديد الملفات المحتوية على الخلل والتصميم المقترح للحل.`],
                    en: [`<span class="text-amber-400 font-bold">&gt; [PLANNING] generating execution trajectories...</span>`, `&gt; Step 1: Ingest active codebase structure and open dependencies.<br>&gt; Step 2: Formulate dynamic test assertions suite for webhook signature checking.<br>&gt; Step 3: Outline secure fix architecture utilizing env-secrets.`]
                }
            },
            act: {
                latency: "LATENCY: 98ms // BASH_EXECUTOR",
                logs: {
                    ar: [`<span class="text-purple-400 font-bold">&gt; [تنفيذ] استدعاء أدوات تعديل الأكواد الآلية...</span>`, `&gt; استدعاء أداة write_to_file لـ "server.js" [ناجح]<br>&gt; تطبيق كود التحقق من تواقيع الاتصالات الواردة.<br>&gt; تشغيل بيئة الخادم وتمرير ملف الإعداد المحمي.`],
                    en: [`<span class="text-purple-400 font-bold">&gt; [ACT] launching automated refactoring tools...</span>`, `&gt; calling write_to_file("server.js") [success]<br>&gt; injecting signature token header matching logic inside route middleware.<br>&gt; rebuilding node modules inside docker container workspace.`]
                }
            },
            observe: {
                latency: "LATENCY: 62ms // EVAL_RUNNER",
                logs: {
                    ar: [`<span class="text-rose-500 font-bold">&gt; [مراقبة] إطلاق حزم اختبارات الأمان والتحقق التلقائي...</span>`, `<span class="text-rose-400">&gt; تشغيل الاختبار: npm run test:security</span><br><span class="text-rose-600 font-bold">&gt; فشل: خرق أمني فادح! يقبل الخادم معطيات الـ webhook بدون التوقيع الصحيح.</span>`],
                    en: [`<span class="text-rose-500 font-bold">&gt; [OBSERVE] executing test suites and assertions...</span>`, `<span class="text-rose-400">&gt; running: npm run test:security</span><br><span class="text-rose-600 font-bold">&gt; FAIL: Security assertion broken! Endpoint accepts spoofed payload without cryptographic signature.</span>`]
                }
            },
            iterate: {
                latency: "LATENCY: 31ms // REASONING_ENGINE",
                logs: {
                    ar: [`<span class="text-emerald-400 font-bold">&gt; [تكرار وتصحيح] إطلاق معالجة تتبع الأخطاء البرمجية...</span>`, `&gt; تحليل الخطأ البرمجي وسياقه... تعديل معالجات stripe والتحقق من التوقيع بالاعتماد على constructEvent.<br><span class="text-emerald-500 font-bold">&gt; نجاح: جميع الاختبارات مرت بنجاح 3/3. تم غلق الثغرة وتأمين النظام.</span>`],
                    en: [`<span class="text-emerald-400 font-bold">&gt; [ITERATE] diagnosing stack trace & re-planning...</span>`, `&gt; parsing test failure trace... rewriting Express route with secure signature decryption middleware.<br><span class="text-emerald-500 font-bold">&gt; SUCCESS: Security test cases verified 3/3. Webhook secured. Trajectory completed.</span>`]
                }
            }
        };

        let activeStep = 'perceive';
        let autoSimInterval = null;

        function selectStep(stepKey) {
            activeStep = stepKey;
            document.querySelectorAll('.sim-step-btn').forEach(b => {
                b.className = "sim-step-btn bg-slate-950 text-slate-400 border border-slate-800 py-3.5 px-3 rounded-xl transition-all cursor-pointer";
            });
            document.getElementById(`step-${stepKey}`).className = "sim-step-btn bg-indigo-600 text-white border border-indigo-400/40 py-3.5 px-3 rounded-xl transition-all shadow-md cursor-pointer";
            
            const logs = document.getElementById('terminal-logs');
            const latency = document.getElementById('terminal-latency');
            latency.innerText = stepsData[stepKey].latency;
            logs.innerHTML = stepsData[stepKey].logs[currentLang].join('<br>');
        }

        function startAutoSim() {
            const btn = document.getElementById('btn-autoplay');
            const icon = document.getElementById('autoplay-icon');
            const txt = document.getElementById('autoplay-text');

            if (autoSimInterval) {
                clearInterval(autoSimInterval);
                autoSimInterval = null;
                icon.innerText = "▶";
                txt.setAttribute('data-i18n', 'autoplay_run');
                txt.innerText = i18n[currentLang].autoplay_run;
                btn.className = "px-5 py-2 rounded-xl text-xs bg-emerald-600 hover:bg-emerald-500 text-white font-semibold flex items-center gap-2 transition-all shadow-md cursor-pointer";
                return;
            }

            icon.innerText = "⏸";
            txt.setAttribute('data-i18n', 'autoplay_pause');
            txt.innerText = i18n[currentLang].autoplay_pause;
            btn.className = "px-5 py-2 rounded-xl text-xs bg-amber-600 hover:bg-amber-500 text-white font-semibold flex items-center gap-2 transition-all shadow-md cursor-pointer";
            
            const order = ['perceive', 'plan', 'act', 'observe', 'iterate'];
            autoSimInterval = setInterval(() => {
                let idx = (order.indexOf(activeStep) + 1) % order.length;
                selectStep(order[idx]);
            }, 2500);
        }

        function resetSim() {
            if (autoSimInterval) {
                clearInterval(autoSimInterval);
                autoSimInterval = null;
                const btn = document.getElementById('btn-autoplay');
                const icon = document.getElementById('autoplay-icon');
                const txt = document.getElementById('autoplay-text');
                icon.innerText = "▶";
                txt.setAttribute('data-i18n', 'autoplay_run');
                txt.innerText = i18n[currentLang].autoplay_run;
                btn.className = "px-5 py-2 rounded-xl text-xs bg-emerald-600 hover:bg-emerald-500 text-white font-semibold flex items-center gap-2 transition-all shadow-md cursor-pointer";
            }
            selectStep('perceive');
        }


        // --- 3. Interactive Code Sandbox & Test Runner Simulator ---
        let currentScenario = 'stripe';
        let currentViewMode = 'vibe'; // 'vibe' or 'agentic'
        let sandboxState = 'idle'; // 'idle', 'testing_failed', 'fixing', 'fixed_idle', 'testing_passed'

        const scenarios = {
            stripe: {
                lang: "javascript",
                vibeCode: `app.post('/webhook', (req, res) => {
    const event = req.body;
    
    // ⚠️ CRITICAL FINANCIAL RISK: Verification skipped entirely!
    if (event.type === 'checkout.session.completed') {
        fulfillOrder(event.data.object);
    }
    
    res.json({received: true});
});`,
                agenticCode: `const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;

    try {
        // ✓ Secure: The harness verifies the webhook signature token
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        return res.status(400).send(\`Webhook Error: \${err.message}\`);
    }

    if (event.type === 'checkout.session.completed') {
        fulfillOrder(event.data.object);
    }

    res.json({received: true});
});`,
                tests: [
                    { name: "Verifying HTTP Method support (POST)", status: "pending" },
                    { name: "Checking Stripe cryptosignature header validity", status: "pending" },
                    { name: "Simulating spoofed checkout event rejection", status: "pending" }
                ],
                vulnDescKey: "stripe_vuln_desc"
            },
            sql: {
                lang: "javascript",
                vibeCode: `app.get('/api/users', (req, res) => {
    const userId = req.query.id;
    
    // ⚠️ SQL INJECTION: Direct string concatenation!
    const query = "SELECT * FROM users WHERE id = " + userId;
    
    db.query(query, (err, results) => {
        res.json(results);
    });
});`,
                agenticCode: `app.get('/api/users', (req, res) => {
    const userId = req.query.id;

    // ✓ Secure: Using parameterized queries to safely escape input parameters
    const query = "SELECT * FROM users WHERE id = ?";
    
    db.query(query, [userId], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database failure' });
        res.json(results);
    });
});`,
                tests: [
                    { name: "Valid ID database retrieval tests", status: "pending" },
                    { name: "SQL payload sanitization check (ID: 1 OR 1=1)", status: "pending" },
                    { name: "User database dumping restriction controls", status: "pending" }
                ],
                vulnDescKey: "sql_vuln_desc"
            },
            ratelimit: {
                lang: "javascript",
                vibeCode: `app.post('/api/heavy-job', (req, res) => {
    // ⚠️ DENIAL OF SERVICE (DDoS): Missing request throttling bounds!
    runComplexCalculation();
    res.json({status: "processing"});
});`,
                agenticCode: `const rateLimit = require('express-rate-limit');

// ✓ Secure: Restrict rapid automated calls to protect containers
const jobLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 requests per window
    message: "Too many calculation requests. Please wait."
});

app.post('/api/heavy-job', jobLimiter, (req, res) => {
    runComplexCalculation();
    res.json({status: "processing"});
});`,
                tests: [
                    { name: "Check standard response rate execution", status: "pending" },
                    { name: "Verify rate limiter middleware integration", status: "pending" },
                    { name: "Simulate spamming test (50 requests in 2 seconds)", status: "pending" }
                ],
                vulnDescKey: "rate_vuln_desc"
            }
        };

        function switchScenario(scenKey) {
            currentScenario = scenKey;
            sandboxState = 'idle';

            document.querySelectorAll('.scen-btn').forEach(btn => {
                btn.className = "scen-btn text-left text-xs bg-slate-950 hover:bg-slate-900 text-slate-400 px-3.5 py-2.5 rounded-lg font-semibold flex items-center justify-between border border-slate-800 transition-all cursor-pointer";
            });
            document.getElementById(`scen-btn-${scenKey}`).className = "scen-btn text-left text-xs bg-indigo-600 text-white px-3.5 py-2.5 rounded-lg font-semibold flex items-center justify-between border border-indigo-400/20 transition-all cursor-pointer";

            // Update vulnerability descriptions
            const descKey = scenarios[scenKey].vulnDescKey;
            const descBanner = document.getElementById('vuln-description');
            descBanner.setAttribute('data-i18n', descKey);
            descBanner.innerHTML = i18n[currentLang][descKey];

            // Default code views
            toggleCodeView('vibe');
            resetSandboxConsole();
        }

        function toggleCodeView(viewMode) {
            currentViewMode = viewMode;
            
            const isVibe = viewMode === 'vibe';
            const outerContainer = document.getElementById('code-container-outer');
            
            document.getElementById('code-view-vibe').className = isVibe 
                ? "w-1/2 text-center py-2.5 rounded-lg bg-rose-600/20 text-rose-300 font-bold border border-rose-500/30 transition-all cursor-pointer" 
                : "w-1/2 text-center py-2.5 rounded-lg text-slate-500 hover:text-slate-300 transition-all cursor-pointer";
            
            document.getElementById('code-view-agentic').className = !isVibe 
                ? "w-1/2 text-center py-2.5 rounded-lg bg-emerald-600/20 text-emerald-300 font-bold border border-emerald-500/30 transition-all cursor-pointer" 
                : "w-1/2 text-center py-2.5 rounded-lg text-slate-500 hover:text-slate-300 transition-all cursor-pointer";
            
            outerContainer.className = isVibe 
                ? "bg-slate-950 rounded-2xl border border-slate-900 p-6 overflow-x-auto relative border-t-4 border-t-rose-600 transition-all duration-300"
                : "bg-slate-950 rounded-2xl border border-slate-900 p-6 overflow-x-auto relative border-t-4 border-t-emerald-600 transition-all duration-300";

            updateSandboxContent();
        }

        function updateSandboxContent() {
            const data = scenarios[currentScenario];
            document.getElementById('editor-lang-tag').innerText = "LANGUAGE: " + data.lang.toUpperCase();
            document.getElementById('editor-code-content').textContent = currentViewMode === 'vibe' ? data.vibeCode : data.agenticCode;

            const agentFixBtn = document.getElementById('agent-fix-btn');
            const runTestsBtn = document.getElementById('run-tests-btn');
            
            if (sandboxState === 'testing_failed' && currentViewMode === 'vibe') {
                agentFixBtn.style.display = 'flex';
                runTestsBtn.className = "flex-1 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold border border-slate-800 text-sm rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer";
            } else {
                agentFixBtn.style.display = 'none';
                runTestsBtn.className = "flex-1 py-3 px-4 bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer";
            }
        }

        function resetSandboxConsole() {
            const consoleLogs = document.getElementById('console-logs-list');
            const successCounter = document.getElementById('test-success-counter');
            
            successCounter.innerText = "0 / 3 PASSED";
            successCounter.className = "text-rose-500 font-bold";
            consoleLogs.innerHTML = `<span class="text-slate-500">${i18n[currentLang].console_init_msg}</span>`;
        }

        function runSandboxTests() {
            const consoleLogs = document.getElementById('console-logs-list');
            const successCounter = document.getElementById('test-success-counter');
            const data = scenarios[currentScenario];

            consoleLogs.innerHTML = `<span class="text-indigo-400 font-bold">&gt; [RUN] starting execution test suite...</span><br>`;
            
            let currentPassed = 0;
            let totalSteps = data.tests.length;

            let stepIdx = 0;
            function runNextTest() {
                if (stepIdx < totalSteps) {
                    const test = data.tests[stepIdx];
                    let testStatus = "";
                    let isPassed = false;

                    // If viewing secure agentic code, tests pass. Otherwise they fail on assertion
                    if (currentViewMode === 'agentic') {
                        testStatus = `<span class="text-emerald-500 font-bold">PASS ✅</span>`;
                        isPassed = true;
                        currentPassed++;
                    } else {
                        // Vibe code logic: third test or security checks fail
                        if (stepIdx === 2) {
                            testStatus = `<span class="text-rose-600 font-bold">FAIL ❌</span>`;
                            isPassed = false;
                        } else {
                            testStatus = `<span class="text-emerald-500 font-bold">PASS ✅</span>`;
                            isPassed = true;
                            currentPassed++;
                        }
                    }

                    consoleLogs.innerHTML += `&gt; test_suite [${stepIdx+1}/${totalSteps}] ${test.name}... ${testStatus}<br>`;
                    successCounter.innerText = `${currentPassed} / ${totalSteps} PASSED`;
                    successCounter.className = currentPassed === totalSteps ? "text-emerald-500 font-bold" : "text-rose-500 font-bold";

                    stepIdx++;
                    setTimeout(runNextTest, 600);
                } else {
                    // All steps completed
                    if (currentViewMode === 'vibe') {
                        sandboxState = 'testing_failed';
                        consoleLogs.innerHTML += `<br><span class="text-rose-500 font-bold">&gt; [ALERT] 1 security assertion failed! Vulnerability active in sandbox environment.</span>`;
                        updateSandboxContent(); // Show magic fix button
                    } else {
                        sandboxState = 'testing_passed';
                        consoleLogs.innerHTML += `<br><span class="text-emerald-500 font-bold">&gt; [SUCCESS] All constraints verified. Integrity audit reports clean package. Build verified!</span>`;
                    }
                }
            }

            setTimeout(runNextTest, 300);
        }

        function triggerAgentFix() {
            const overlay = document.getElementById('code-typing-overlay');
            const statusText = document.getElementById('typing-status-text');
            
            overlay.classList.remove('hidden');
            sandboxState = 'fixing';
            
            const fixingSteps = [
                { text: "Agent: Searching AST for route vulnerabilities...", delay: 600 },
                { text: "Agent: Modifying AST. Replacing unsafe bindings with secure equivalents...", delay: 1200 },
                { text: "Agent: Running sandbox linter validation...", delay: 1800 }
            ];

            fixingSteps.forEach(step => {
                setTimeout(() => {
                    statusText.innerText = step.text;
                }, step.delay);
            });

            setTimeout(() => {
                overlay.classList.add('hidden');
                sandboxState = 'fixed_idle';
                
                // Toggle view to agentic code and flash success
                toggleCodeView('agentic');
                const outerEditor = document.getElementById('code-container-outer');
                outerEditor.classList.add('ring-4', 'ring-emerald-500/50');
                setTimeout(() => outerEditor.classList.remove('ring-4', 'ring-emerald-500/50'), 1500);

                // Run tests automatically
                runSandboxTests();
            }, 2600);
        }


        // --- 4. Modality Switcher & Visual Flowchart Simulator ---
        let activeModality = 'conductor';

        const modalityTemplates = {
            conductor: {
                ar_title: "توجيه مباشر وتفاعل لحظي (IDE Synchronous)",
                en_title: "Hands-on, Real-time Direction (IDE Synchronous)",
                ar_desc: "أنت تعمل جنباً إلى جنب مع مساعد ذكي مدمج داخل محرر الأكواد الخاص بك. تقوم بكتابة التوجيهات ويقوم هو بكتابة الأكواد وتكملتها أمام عينيك بشكل متزامن وبإشرافك المباشر.",
                en_desc: "You work hand-in-hand with an AI assistant directly inside code editors. You prompt edits, watch inline code suggestions appear instantly, and maintain granular keystroke-level authority.",
                tag: "ACTIVE FLOW",
                footer: "IDE ENVIRONMENT STATUS: SYNC_READY"
            },
            orchestrator: {
                ar_title: "التفويض الذاتي لوكلاء متعددين (Async Trajectory)",
                en_title: "Async Multi-Agent Delegation (Async Trajectory)",
                ar_desc: "أنت تعمل كمدير يشرف على المشروع. تقوم بكتابة الهدف العام ويقوم وكلاء فرعيون متعددون بالعمل معاً في الخلفية لحل المشكلات البرمجية، وبناء الواجهة، وتجهيز الاختبارات تلقائياً.",
                en_desc: "You act as a supervisor configuring goal paths and evaluation bounds. Background tasks run autonomously across multiple repositories inside sandbox servers, producing whole pull requests ready for audit.",
                tag: "BACKGROUND FACTORY",
                footer: "BACKGROUND AGENT STATUS: RUNNING_IN_ISOLATION"
            }
        };

        const subagentsLogs = {
            frontend: {
                name: "Frontend Subagent",
                task: "UI Component building",
                progress: 80,
                color: "indigo",
                logs: [
                    "[Git] Checked out feature branch: feat/login-design",
                    "[NPM] Installing font libraries & tailwind assets...",
                    "[Linter] Formatting files. 0 errors found.",
                    "[Vite] Live development server hot reloaded."
                ]
            },
            backend: {
                name: "Backend Subagent",
                task: "OAuth Database connection",
                progress: 100,
                color: "emerald",
                logs: [
                    "[Prisma] Scaffolded user session model schemas...",
                    "[Express] Set up endpoint validation middleware...",
                    "[Jest] Running database test assertions: 12 tests passed.",
                    "[Build] Backend production distribution package created."
                ]
            },
            qa: {
                name: "QA Testing Subagent",
                task: "Integration assertions & audits",
                progress: 30,
                color: "rose",
                logs: [
                    "[Cypress] Launching headless browser agent...",
                    "[Audit] Scanning inputs for SQL Injection... PENDING",
                    "[Observe] Run time metrics collected. Average response: 24ms."
                ]
            }
        };

        function toggleModality(modeKey) {
            activeModality = modeKey;
            const isCond = modeKey === 'conductor';
            
            document.getElementById('m-btn-conductor').className = isCond 
                ? "w-full text-right bg-indigo-600/20 border border-indigo-500/40 text-indigo-200 px-5 py-4 rounded-xl font-bold text-sm transition-all shadow-md flex items-center justify-between cursor-pointer" 
                : "w-full text-right bg-slate-950 text-slate-500 border border-slate-800 px-5 py-4 rounded-xl font-bold text-sm transition-all hover:border-slate-800 flex items-center justify-between cursor-pointer";
            
            document.getElementById('m-btn-orchestrator').className = !isCond 
                ? "w-full text-right bg-indigo-600/20 border border-indigo-500/40 text-indigo-200 px-5 py-4 rounded-xl font-bold text-sm transition-all shadow-md flex items-center justify-between cursor-pointer" 
                : "w-full text-right bg-slate-950 text-slate-500 border border-slate-800 px-5 py-4 rounded-xl font-bold text-sm transition-all hover:border-slate-800 flex items-center justify-between cursor-pointer";
            
            updateModalityContents();
        }

        let typingInterval = null;
        function startConductorTypingSim() {
            if (typingInterval) clearInterval(typingInterval);
            
            const block = document.getElementById('conductor-code-simulator');
            if (!block) return;

            const codeSnippets = [
                `const Header = () => {\n  return (\n    <header className="bg-slate-900 px-6 py-4 flex justify-between">\n      <div className="logo">Brand</div>`,
                `const Header = () => {\n  return (\n    <header className="bg-slate-900 px-6 py-4 flex justify-between">\n      <div className="logo">Brand</div>\n      <nav>\n        <ul className="flex space-x-4">`,
                `const Header = () => {\n  return (\n    <header className="bg-slate-900 px-6 py-4 flex justify-between">\n      <div className="logo">Brand</div>\n      <nav>\n        <ul className="flex space-x-4">\n          <li>Home</li>\n          <li>Dashboard</li>`
            ];

            let index = 0;
            block.textContent = codeSnippets[0] + "\n      _";
            
            typingInterval = setInterval(() => {
                index = (index + 1) % codeSnippets.length;
                block.textContent = codeSnippets[index] + "\n      _";
            }, 2000);
        }

        function updateModalityContents() {
            const container = document.getElementById('modality-details-view');
            const data = modalityTemplates[activeModality];

            const title = currentLang === 'ar' ? data.ar_title : data.en_title;
            const desc = currentLang === 'ar' ? data.ar_desc : data.en_desc;

            if (activeModality === 'conductor') {
                if (typingInterval) clearInterval(typingInterval);
                
                container.innerHTML = `
                    <div class="space-y-4">
                        <div class="flex justify-between items-center">
                            <h3 class="text-xl md:text-2xl font-bold text-white">${title}</h3>
                            <span class="text-[10px] font-mono bg-indigo-900/50 text-indigo-300 px-2 py-0.5 rounded border border-indigo-900/50 uppercase">${data.tag}</span>
                        </div>
                        <p class="text-slate-300 text-sm leading-relaxed">${desc}</p>
                        
                        <!-- Simulated Editor -->
                        <div class="p-4 bg-[#05070f] rounded-xl border border-slate-800/80 font-mono text-xs">
                            <div class="flex justify-between border-b border-slate-900 pb-2 mb-2 text-slate-500">
                                <span>src/components/Header.jsx</span>
                                <span class="text-indigo-400 font-bold animate-pulse">${currentLang === 'ar' ? 'الذكاء الاصطناعي يكتب...' : 'AI is typing...'}</span>
                            </div>
                            <pre class="text-emerald-400" id="conductor-code-simulator">const Header = () => {
  return (
    &lt;header className="bg-slate-900 px-6 py-4 flex justify-between"&gt;
      &lt;div className="logo"&gt;Brand&lt;/div&gt;
      _</pre>
                        </div>
                    </div>
                    <div class="text-[10px] text-slate-600 code-font border-t border-slate-900 pt-4">${i18n[currentLang].cond_footer}</div>
                </div>`;
                startConductorTypingSim();
            } else {
                // Orchestrator Visual Flowchart Simulator
                if (typingInterval) clearInterval(typingInterval);
                
                container.innerHTML = `
                    <div class="space-y-4">
                        <div class="flex justify-between items-center">
                            <h3 class="text-xl md:text-2xl font-bold text-white">${title}</h3>
                            <span class="text-[10px] font-mono bg-indigo-900/50 text-indigo-300 px-2 py-0.5 rounded border border-indigo-900/50 uppercase">${data.tag}</span>
                        </div>
                        <p class="text-slate-300 text-sm leading-relaxed">${desc}</p>
                        
                        <!-- Interactive Flowchart Diagram Nodes -->
                        <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-2 relative">
                            
                            <!-- Coordinator Node -->
                            <div class="md:col-span-3 flex flex-col items-center justify-center p-3 bg-indigo-950/80 rounded-xl border border-indigo-500/40 text-center glow-indigo-strong">
                                <div class="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-xs mb-1">🛸</div>
                                <div class="text-[10px] font-bold font-mono">COORDINATOR</div>
                                <div class="text-[9px] text-indigo-300 font-mono">Status: Routing</div>
                            </div>

                            <!-- Flow Arrows indicators -->
                            <div class="hidden md:flex md:col-span-1 flex-col items-center justify-center text-indigo-500/40 text-xl font-bold">
                                <div>➔</div>
                            </div>

                            <!-- Subagents Node Columns -->
                            <div class="md:col-span-8 space-y-2">
                                <span class="text-[10px] text-slate-500 block">${currentLang === 'ar' ? 'الوكلاء الفرعيون النشطون (اضغط لاستعراض السجلات):' : 'Active Subagents (click to inspect):'}</span>
                                
                                <!-- Subagent Node 1 -->
                                <div onclick="inspectSubagent('frontend')" id="node-frontend" class="p-3 bg-slate-900/90 hover:bg-slate-800 border border-indigo-950 rounded-xl flex items-center justify-between cursor-pointer transition-all hover:scale-[1.02]">
                                    <div class="flex items-center gap-2">
                                        <div class="w-6 h-6 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center text-xs font-bold">FE</div>
                                        <div>
                                            <div class="text-[10px] font-bold">Frontend Subagent</div>
                                            <div class="text-[8px] text-slate-500">UI Building</div>
                                        </div>
                                    </div>
                                    <div class="text-right w-24">
                                        <div class="text-[9px] font-mono text-indigo-400 font-bold mb-1">80%</div>
                                        <div class="w-full bg-slate-950 h-1 rounded-full overflow-hidden">
                                            <div class="bg-indigo-500 h-1" style="width: 80%"></div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Subagent Node 2 -->
                                <div onclick="inspectSubagent('backend')" id="node-backend" class="p-3 bg-slate-900/90 hover:bg-slate-800 border border-indigo-950 rounded-xl flex items-center justify-between cursor-pointer transition-all hover:scale-[1.02]">
                                    <div class="flex items-center gap-2">
                                        <div class="w-6 h-6 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center text-xs font-bold">BE</div>
                                        <div>
                                            <div class="text-[10px] font-bold">Backend Subagent</div>
                                            <div class="text-[8px] text-slate-500">APIs & DB</div>
                                        </div>
                                    </div>
                                    <div class="text-right w-24">
                                        <div class="text-[9px] font-mono text-emerald-400 font-bold mb-1">100%</div>
                                        <div class="w-full bg-slate-950 h-1 rounded-full overflow-hidden">
                                            <div class="bg-emerald-500 h-1" style="width: 100%"></div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Subagent Node 3 -->
                                <div onclick="inspectSubagent('qa')" id="node-qa" class="p-3 bg-slate-900/90 hover:bg-slate-800 border border-indigo-950 rounded-xl flex items-center justify-between cursor-pointer transition-all hover:scale-[1.02]">
                                    <div class="flex items-center gap-2">
                                        <div class="w-6 h-6 rounded-lg bg-rose-600/20 text-rose-400 flex items-center justify-center text-xs font-bold">QA</div>
                                        <div>
                                            <div class="text-[10px] font-bold">QA Testing Subagent</div>
                                            <div class="text-[8px] text-slate-500">Vulnerabilities Scan</div>
                                        </div>
                                    </div>
                                    <div class="text-right w-24">
                                        <div class="text-[9px] font-mono text-rose-400 font-bold mb-1">30%</div>
                                        <div class="w-full bg-slate-950 h-1 rounded-full overflow-hidden">
                                            <div class="bg-rose-500 h-1 animate-pulse" style="width: 30%"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Active Subagent Inspection Terminal Output -->
                        <div class="bg-[#05070f] rounded-xl border border-slate-900 p-4 font-mono text-[10px] text-slate-400" id="subagent-inspection-logs">
                            <span class="text-slate-500" data-i18n="agent_logs_title">${i18n[currentLang].agent_logs_title}</span>
                            <div class="mt-2 text-indigo-400 font-bold" id="inspected-subagent-name">&gt; FE_AGENT Logs:</div>
                            <div id="inspected-logs-list" class="space-y-1 mt-1">
                                <div>[Git] Checked out feature branch: feat/login-design</div>
                                <div>[NPM] Installing font libraries & tailwind assets...</div>
                                <div>[Linter] Formatting files. 0 errors found.</div>
                            </div>
                        </div>
                    </div>
                    <div class="text-[10px] text-slate-600 code-font border-t border-slate-900 pt-4">${i18n[currentLang].orch_footer}</div>
                </div>`;
                inspectSubagent('frontend');
            }
        }

        function inspectSubagent(agentKey) {
            const data = subagentsLogs[agentKey];
            const nameEl = document.getElementById('inspected-subagent-name');
            const listEl = document.getElementById('inspected-logs-list');

            // Highlight selected node border
            ['frontend', 'backend', 'qa'].forEach(k => {
                const node = document.getElementById(`node-${k}`);
                if (node) {
                    node.style.borderColor = k === agentKey ? 'rgba(99, 102, 241, 0.6)' : 'rgba(30, 41, 59, 0.4)';
                    node.style.boxShadow = k === agentKey ? '0 0 15px rgba(99, 102, 241, 0.15)' : 'none';
                }
            });

            nameEl.innerText = `> ${data.name.toUpperCase()} Logs (Task: ${data.task}):`;
            nameEl.className = `font-bold text-${data.color}-400 mt-2`;

            listEl.innerHTML = data.logs.map(log => {
                return `<div class="transition-opacity duration-300 opacity-90">${log}</div>`;
            }).join('');
        }


        // --- 5. Interactive Assistant Chatbot Companion Logic ---
        // Enhanced scroll listener update bot status/speech
        const speechMap = {
            'section-hero': "bot_speech_scroll_hero",
            'section-harness': "bot_speech_scroll_harness",
            'section-loop': "bot_speech_scroll_loop",
            'section-playground': "bot_speech_scroll_playground",
            'section-modality': "bot_speech_scroll_modality",
            'section-mcp': "bot_speech_scroll_mcp",
            'section-a2ui': "bot_speech_scroll_a2ui",
            'section-payments': "bot_speech_scroll_payments"
        };

        window.addEventListener('scroll', () => {
            const sections = ['section-hero', 'section-harness', 'section-loop', 'section-playground', 'section-modality', 'section-mcp', 'section-a2ui', 'section-payments'];
            let currentSection = 'section-hero';

            sections.forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) {
                        currentSection = id;
                    }
                }
            });

            const speechBubble = document.getElementById('bot-speech');
            const botStatus = document.getElementById('bot-status');
            
            const activeKey = speechMap[currentSection];
            if (speechBubble && speechBubble.getAttribute('data-current') !== currentSection) {
                speechBubble.setAttribute('data-current', currentSection);
                botStatus.innerText = "ANALYZING_" + currentSection.replace('section-', '').toUpperCase();
                
                speechBubble.style.opacity = '0';
                setTimeout(() => {
                    speechBubble.innerHTML = i18n[currentLang][activeKey];
                    speechBubble.style.opacity = '1';
                }, 150);
            }
        });

        // Quick action bot router trigger
        function botTriggerAction(actionKey) {
            const botSpeech = document.getElementById('bot-speech');
            const botStatus = document.getElementById('bot-status');

            if (actionKey === 'harness') {
                botStatus.innerText = "ACTION_HARNESS";
                botSpeech.innerHTML = currentLang === 'ar' 
                    ? "الذهاب إلى قسم بيئة التشغيل... القفص ثلاثي الأبعاد يعرض كيف يتحكم الـ Harness بحصانة النموذج!" 
                    : "Navigating to Harness Module... Let's inspect the rotating 3D box representing the Harness (~90%) and LLM (~10%)!";
                
                document.getElementById('section-harness').scrollIntoView({ behavior: 'smooth' });
                
                const viewport = document.getElementById('threeDScene');
                viewport.classList.add('ring-2', 'ring-indigo-500');
                setTimeout(() => viewport.classList.remove('ring-2', 'ring-indigo-500'), 1500);

            } else if (actionKey === 'loop') {
                botStatus.innerText = "ACTION_LOOP";
                botSpeech.innerHTML = currentLang === 'ar'
                    ? "التوجيه إلى حلقة الوكيل... بدء تشغيل دورة المحاكاة والطرفية آلياً!"
                    : "Scrolling to Self-Correction Arena... Triggering auto-simulation trajectory logs now!";
                
                document.getElementById('section-loop').scrollIntoView({ behavior: 'smooth' });
                resetSim();
                setTimeout(startAutoSim, 600);

            } else if (actionKey === 'playground') {
                botStatus.innerText = "ACTION_PLAYGROUND";
                botSpeech.innerHTML = currentLang === 'ar'
                    ? "الذهاب إلى مختبر الكود الأمني... تشغيل اختبارات Webhook وحل الثغرات تلقائياً!"
                    : "Navigating to Security Sandbox... Audit Express inputs and apply cryptographic fixes!";
                
                document.getElementById('section-playground').scrollIntoView({ behavior: 'smooth' });
                switchScenario('stripe');

            } else if (actionKey === 'orchestration') {
                botStatus.innerText = "ACTION_ORCHESTRATION";
                botSpeech.innerHTML = currentLang === 'ar'
                    ? "مخطط الأوركستراتور يعرض استدعاء الوكلاء الفرعيين، تفقد تفاصيل سجل كل منهم بالضغط عليه!"
                    : "Loading subagents visual workflow... Click on FE, BE, or QA node elements to view active background streams!";
                
                document.getElementById('section-modality').scrollIntoView({ behavior: 'smooth' });
                toggleModality('orchestrator');

            } else if (actionKey === 'mcp') {
                botStatus.innerText = "ACTION_MCP";
                botSpeech.innerHTML = currentLang === 'ar'
                    ? "الذهاب إلى مركز أدوات MCP... تفقد كيف تتصل النماذج اللغوية بالأدوات الخارجية باستخدام payloads!"
                    : "Navigating to MCP Hub... Inspect how language models securely bind local and remote tools!";
                
                document.getElementById('section-mcp').scrollIntoView({ behavior: 'smooth' });

            } else if (actionKey === 'a2ui') {
                botStatus.innerText = "ACTION_A2UI";
                botSpeech.innerHTML = currentLang === 'ar'
                    ? "الذهاب إلى مولد الواجهات A2UI... شاهد كيف ينتج الوكيل واجهات المستخدم حيةً!"
                    : "Scrolling to A2UI Generator... Watch the agent output raw markup and render it instantly!";
                
                document.getElementById('section-a2ui').scrollIntoView({ behavior: 'smooth' });

            } else if (actionKey === 'payments') {
                botStatus.innerText = "ACTION_PAYMENTS";
                botSpeech.innerHTML = currentLang === 'ar'
                    ? "الذهاب إلى محفظة الوكيل AP2... شاهد نظام المدفوعات التلقائي والتفويضات!"
                    : "Scrolling to AP2 Agent Wallet... Observe machine-to-machine payments with UCP protocol!";
                
                document.getElementById('section-payments').scrollIntoView({ behavior: 'smooth' });
            }
        }

        // QA Database for Companion Bot Chat
        const chatQA = {
            ar: {
                "مرحبا": "أهلاً بك! أنا جاهز لمساعدتك، اسألني عن 'القفص'، 'البرمجة الحدسية'، 'هندسة الوكلاء'، أو 'الأوركستراتور'!",
                "القفص": "القفص (Harness) هو البيئة المحصنة المعزولة (~90% من النظام) التي تحيط بالنموذج اللغوي الداخلي. توفر للمساعد خوادم الاختبار، والوصول المقيد للملفات، وبروتوكولات الـ MCP.",
                "الحدس": "البرمجة الحدسية (Vibe Coding) هي كتابة الأكواد بالاعتماد الكلي على الاقتراحات الفورية للذكاء الاصطناعي دون وجود ملفات فحص أو قيود تشغيل، وهي تسبب ثغرات خطيرة وتكاليف مراجعة عالية.",
                "الوكلاء": "هندسة الوكلاء الذكية (Agentic Engineering) هي دمج نموذج الذكاء الاصطناعي ببيئة حماية اختبارية قوية تقوم بتشغيل الكود، والتحقق من مخرجاته، وتصحيح الأخطاء تلقائياً قبل الرفع والإنتاج.",
                "المنسق": "المنسق (Orchestrator) هو وضع للوكلاء يقوم فيه المبرمج بتكليف وكيل المنسق بهدف معقد، فيقوم المنسق بتقسيم العمل واستدعاء وكلاء فرعيين (Frontend, Backend, QA) والعمل معهم بشكل غير متزامن.",
                "المايسترو": "المايسترو (Conductor) هو وضع متزامن، حيث يعمل المطور جنباً إلى جنب مع المساعد الذكي مباشرة داخل محرر الأكواد (مثل الإكمال التلقائي المتطور)، خطوة بخطوة.",
                "ثغرة": "مختبر الكود التفاعلي لدينا يوضح ثغرة Stripe Webhook وغيرها. عند استقبال الطلبات بدون توثيق التواقيع التشفيرية، يمكن تزوير العمليات بالكامل وتخطي بوابات الدفع.",
                "حلقة": "دورة عمل الوكيل (Loop) تسمح له بالإدراك ووضع الخطط وتنفيذها، ثم قراءة سجل الأخطاء من الطرفية وإعادة محاولة إصلاح الكود حتى تنجح جميع القيود الاختبارية المحددة.",
                "mcp": "بروتوكول سياق النموذج (Model Context Protocol) هو معيار مفتوح يتيح للوكلاء الاتصال بمصادر البيانات والأدوات الخارجية (مثل الملفات المحلية وقواعد البيانات) عبر رسائل JSON-RPC 2.0.",
                "a2ui": "توليد واجهات المستخدم للوكلاء (Agent-to-User Interface) تتيح للوكيل توليد عناصر الواجهة ديناميكياً وعرضها للمستخدم حيةً لمراجعتها وإدارتها.",
                "ap2": "بروتوكول مدفوعات الوكيل (AP2/UCP) هو نظام يسمح للوكلاء بدفع قيمة استهلاك الـ APIs وموارد الخوادم ذاتياً باستخدام محافظ ميكرو-رقمية مشفرة بموافقة المطور عند تخطي حدود معينة."
            },
            en: {
                "hello": "Hello! I am ready to guide you. Ask me about the 'harness', 'vibe coding', 'agentic engineering', or 'orchestrator'!",
                "harness": "The Harness (~90%) is the isolated system surrounding the AI model. It provides sandbox terminals, validation tests (Evals), and strict boundaries to keep execution aligned.",
                "vibe": "Vibe Coding is casual prompting where code is thrown together without assertions or structures. It feels fast initially but incurs major fixing and security costs later.",
                "agent": "Agentic Engineering is a disciplined approach where models operate within structured environments, running auto-corrective loops (Perceive-Plan-Act-Observe-Iterate) to meet tests.",
                "orchestrator": "The Orchestrator mode is when a developer delegates complex engineering workflows to background agents (like Frontend, Backend, QA subagents) asynchronously.",
                "conductor": "The Conductor mode is real-time, synchronous pair-programming. You watch the AI write code inside your editor line-by-line under direct supervision.",
                "stripe": "Our Stripe gateway demo highlights webhook vulnerabilities. Without signature verification, requests can easily be spoofed to bypass payment guards.",
                "loop": "The agent loop lets the assistant continuously perceive goals, plan changes, act inside sandboxes, observe errors, and iterate until tests pass successfully.",
                "mcp": "Model Context Protocol (MCP) is an open standard enabling agents to integrate securely with external data sources and execution tools using JSON-RPC 2.0 payloads.",
                "a2ui": "Agent-to-User Interface (A2UI) enables language models to dynamically draft and serve interactive UI components directly to the user viewport.",
                "ap2": "Agent payments protocol (AP2/UCP) defines how autonomous agents utilize digital wallets to pay for compute/APIs on-the-fly, prompting consent for high thresholds."
            }
        };

        function handleInputKey(e) {
            if (e.key === 'Enter') {
                submitChatQuery();
            }
        }

        function submitChatQuery() {
            const inputEl = document.getElementById('bot-chat-input');
            const botSpeech = document.getElementById('bot-speech');
            const botStatus = document.getElementById('bot-status');
            const thinkingArea = document.getElementById('bot-thinking-area');
            const query = inputEl.value.trim().toLowerCase();
            
            if (!query) return;

            // Clear input and show thinking nodes
            inputEl.value = "";
            botStatus.innerText = i18n[currentLang].bot_status_thinking;
            botSpeech.style.opacity = '0.3';
            thinkingArea.classList.remove('hidden');

            // Reset thinking nodes opacity
            const node1 = document.getElementById('cot-node-1');
            const node2 = document.getElementById('cot-node-2');
            const node3 = document.getElementById('cot-node-3');

            node1.className = "flex items-center gap-1.5 opacity-100";
            node1.innerHTML = `<i class="fas fa-spinner animate-spin text-indigo-500"></i> <span>${i18n[currentLang].cot_1}</span>`;
            
            node2.className = "flex items-center gap-1.5 opacity-40";
            node2.innerHTML = `<i class="far fa-circle text-slate-600"></i> <span>${i18n[currentLang].cot_2}</span>`;
            
            node3.className = "flex items-center gap-1.5 opacity-40";
            node3.innerHTML = `<i class="far fa-circle text-slate-600"></i> <span>${i18n[currentLang].cot_3}</span>`;

            // Thought Step 1 -> Step 2
            setTimeout(() => {
                node1.innerHTML = `<i class="fas fa-check-circle text-emerald-500"></i> <span>${i18n[currentLang].cot_1}</span>`;
                node2.className = "flex items-center gap-1.5 opacity-100";
                node2.innerHTML = `<i class="fas fa-spinner animate-spin text-indigo-500"></i> <span>${i18n[currentLang].cot_2}</span>`;
            }, 600);

            // Thought Step 2 -> Step 3
            setTimeout(() => {
                node2.innerHTML = `<i class="fas fa-check-circle text-emerald-500"></i> <span>${i18n[currentLang].cot_2}</span>`;
                node3.className = "flex items-center gap-1.5 opacity-100";
                node3.innerHTML = `<i class="fas fa-spinner animate-spin text-indigo-500"></i> <span>${i18n[currentLang].cot_3}</span>`;
            }, 1200);

            // Deliver Final Response
            setTimeout(() => {
                node3.innerHTML = `<i class="fas fa-check-circle text-emerald-500"></i> <span>${i18n[currentLang].cot_3}</span>`;
                
                let answer = currentLang === 'ar' 
                    ? "قمت بتحليل طلبك، لكنني لم أجد كلمة مفتاحية مطابقة تماماً. ابحث عن 'القفص' أو 'الحدس' أو 'وضعية المنسق'!"
                    : "I analyzed your query but couldn't find a direct match in the SDLC curriculum. Try asking about the 'harness', 'vibe coding', 'stripe API', or 'loop'!";

                const db = chatQA[currentLang];
                for (let keyword in db) {
                    if (query.includes(keyword)) {
                        answer = db[keyword];
                        break;
                    }
                }

                botStatus.innerText = i18n[currentLang].bot_status_done;
                botSpeech.innerHTML = answer;
                botSpeech.style.opacity = '1';
                
                // Keep CoT visible for a moment then hide
                setTimeout(() => {
                    thinkingArea.classList.add('hidden');
                }, 1000);

            }, 1800);
        }

        // --- Day 2 Enhancements: 5. MCP Hub Simulator ---
        const mcpPayloads = {
            discoveryRequest: {
                "jsonrpc": "2.0",
                "method": "tools/list",
                "id": 1
            },
            discoveryResponse: {
                "jsonrpc": "2.0",
                "result": {
                    "tools": [
                        {
                            "name": "read_database",
                            "description": "Reads raw client and workspace transactional tables",
                            "inputSchema": {
                                "type": "object",
                                "properties": {
                                    "query": { "type": "string" }
                                }
                            }
                        },
                        {
                            "name": "write_to_file",
                            "description": "Writes code contents to a target workspace file path",
                            "inputSchema": {
                                "type": "object",
                                "properties": {
                                    "path": { "type": "string" },
                                    "content": { "type": "string" }
                                }
                            }
                        }
                    ]
                },
                "id": 1
            },
            callRequest: {
                "jsonrpc": "2.0",
                "method": "tools/call",
                "params": {
                    "name": "read_database",
                    "arguments": {
                        "query": "SELECT balance, address FROM agent_wallet LIMIT 1"
                    }
                },
                "id": 2
            },
            callResponse: {
                "jsonrpc": "2.0",
                "result": {
                    "content": [
                        {
                            "type": "text",
                            "text": "[{\"balance\": 10.00, \"address\": \"0xAgentF8a...B952\"}]"
                        }
                    ]
                },
                "id": 2
            }
        };

        function triggerMcpDiscovery() {
            const consoleBox = document.getElementById('mcp-terminal-console');
            const latencyBox = document.getElementById('mcp-latency');
            
            latencyBox.innerText = "Latency: 2ms";
            consoleBox.innerHTML = `<span class="text-indigo-400">&gt; SENDING tools/list query...</span>\n` + 
                JSON.stringify(mcpPayloads.discoveryRequest, null, 2);
                
            setTimeout(() => {
                latencyBox.innerText = "Latency: 12ms";
                consoleBox.innerHTML += `\n\n<span class="text-emerald-400">&gt; RECEIVED discovery response:</span>\n` + 
                    JSON.stringify(mcpPayloads.discoveryResponse, null, 2);
            }, 600);
        }

        function triggerMcpCallTool() {
            const consoleBox = document.getElementById('mcp-terminal-console');
            const latencyBox = document.getElementById('mcp-latency');
            
            latencyBox.innerText = "Latency: 3ms";
            consoleBox.innerHTML = `<span class="text-indigo-400">&gt; CALLING tool read_database...</span>\n` + 
                JSON.stringify(mcpPayloads.callRequest, null, 2);
                
            setTimeout(() => {
                latencyBox.innerText = "Latency: 24ms";
                consoleBox.innerHTML += `\n\n<span class="text-emerald-400">&gt; RECEIVED execution return content:</span>\n` + 
                    JSON.stringify(mcpPayloads.callResponse, null, 2);
            }, 800);
        }

        // --- Day 2 Enhancements: 6. A2A Collaboration Simulator ---
        function triggerA2aSimulation() {
            const logs = document.getElementById('a2a-logs-list');
            const coord = document.getElementById('a2a-coordinator');
            const sub1 = document.getElementById('a2a-sub-1');
            const sub2 = document.getElementById('a2a-sub-2');
            const sub3 = document.getElementById('a2a-sub-3');
            
            const arr1 = document.getElementById('a2a-arrow-1');
            const arr2 = document.getElementById('a2a-arrow-2');
            const arr3 = document.getElementById('a2a-arrow-3');
            
            logs.innerHTML = `<span class="text-purple-400 font-bold">&gt; [COORDINATOR] objective: Enhance and deploy secure payment code.</span><br>`;
            coord.classList.add('ring-4', 'ring-indigo-500');
            
            // Phase 1: Call Code Gen
            setTimeout(() => {
                arr1.className = "w-1/3 text-center text-indigo-400 text-lg transition-colors font-bold";
                sub1.className = "p-2.5 bg-indigo-950 border border-indigo-500 rounded-lg text-center transition-all duration-300 scale-105";
                sub1.querySelector('.text-[8px]').innerText = "GENERATING_CODE";
                logs.innerHTML += `&gt; [A2A] coordinator sent tool/call request to CodeGen agent (write_to_file "payments.js")<br>`;
            }, 600);

            // Phase 2: Call Auditor
            setTimeout(() => {
                arr1.className = "w-1/3 text-center text-slate-600 text-lg transition-colors";
                sub1.className = "p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-center transition-all duration-300";
                sub1.querySelector('.text-[8px]').innerText = "COMPLETED";
                
                arr2.className = "w-1/3 text-center text-rose-400 text-lg transition-colors font-bold";
                sub2.className = "p-2.5 bg-rose-950 border border-rose-500 rounded-lg text-center transition-all duration-300 scale-105";
                sub2.querySelector('.text-[8px]').innerText = "AUDITING_INPUTS";
                logs.innerHTML += `&gt; [A2A] CodeGen reports success. coordinator calls Auditor agent to verify AST vulnerabilities...<br>`;
            }, 1800);

            // Phase 3: Call Payments
            setTimeout(() => {
                arr2.className = "w-1/3 text-center text-slate-600 text-lg transition-colors";
                sub2.className = "p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-center transition-all duration-300";
                sub2.querySelector('.text-[8px]').innerText = "VERIFIED";
                
                arr3.className = "w-1/3 text-center text-amber-400 text-lg transition-colors font-bold";
                sub3.className = "p-2.5 bg-amber-950 border border-amber-500 rounded-lg text-center transition-all duration-300 scale-105";
                sub3.querySelector('.text-[8px]').innerText = "PAYMENT_MICROAUTH";
                logs.innerHTML += `&gt; [A2A] Auditor reports zero flaws. coordinator calls Payments agent to trigger UCP billing check...<br>`;
            }, 3000);

            // Finish
            setTimeout(() => {
                arr3.className = "w-1/3 text-center text-slate-600 text-lg transition-colors";
                sub3.className = "p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-center transition-all duration-300";
                sub3.querySelector('.text-[8px]').innerText = "CHARGED";
                
                coord.classList.remove('ring-4', 'ring-indigo-500');
                logs.innerHTML += `<span class="text-emerald-400 font-bold">&gt; [COORDINATOR] execution sequence completed. deployment payload queued.</span>`;
            }, 4200);
        }

        // --- Day 2 Enhancements: 7. A2UI Generator Simulator ---
        let a2uiTab = 'code';
        const a2uiPresets = {
            chart: {
                prompt: "Show a metrics chart component with sales values",
                code: `<div class="bg-slate-950 p-4 rounded-xl border border-slate-800 w-full max-w-sm mx-auto text-white">\n` +
                      `    <h4 class="text-xs font-bold mb-2">📊 Product Sales Units</h4>\n` +
                      `    <div class="flex items-end justify-between h-24 gap-1.5 pt-2">\n` +
                      `        <div class="bg-indigo-500 w-full rounded-t" style="height: 40%"></div>\n` +
                      `        <div class="bg-indigo-500 w-full rounded-t" style="height: 65%"></div>\n` +
                      `        <div class="bg-emerald-500 w-full rounded-t animate-pulse" style="height: 90%"></div>\n` +
                      `        <div class="bg-indigo-500 w-full rounded-t" style="height: 50%"></div>\n` +
                      `    </div>\n` +
                      `    <div class="flex justify-between text-[8px] text-slate-500 mt-1.5 font-mono">\n` +
                      `        <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span>\n` +
                      `    </div>\n` +
                      `</div>`,
                preview: `<div class="bg-slate-950 p-4 rounded-xl border border-slate-800 w-full max-w-sm mx-auto text-white font-sans text-right">` +
                         `    <h4 class="text-xs font-bold mb-2 flex items-center justify-between"><span>📊 Product Sales Units</span><span class="text-[9px] text-slate-500 font-mono">2026</span></h4>` +
                         `    <div class="flex items-end justify-between h-24 gap-1.5 pt-2">` +
                         `        <div class="bg-indigo-500 w-full rounded-t" style="height: 40%"></div>` +
                         `        <div class="bg-indigo-500 w-full rounded-t" style="height: 65%"></div>` +
                         `        <div class="bg-emerald-500 w-full rounded-t" style="height: 90%"></div>` +
                         `        <div class="bg-indigo-500 w-full rounded-t" style="height: 50%"></div>` +
                         `    </div>` +
                         `    <div class="flex justify-between text-[8px] text-slate-500 mt-1.5 font-mono">` +
                         `        <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span>` +
                         `    </div>` +
                         `</div>`
            },
            card: {
                prompt: "Draft a modern developer user profile card",
                code: `<div class="bg-[#0b0e14]/90 p-4 rounded-2xl border border-slate-800/80 flex items-center gap-3 w-full max-w-sm mx-auto">\n` +
                      `    <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center font-bold text-xs">AG</div>\n` +
                      `    <div class="space-y-0.5">\n` +
                      `        <h4 class="text-xs font-bold">Abd Alrahaman gz</h4>\n` +
                      `        <span class="text-[9px] text-indigo-400 font-mono">Agent Developer</span>\n` +
                      `    </div>\n` +
                      `</div>`,
                preview: `<div class="bg-[#0b0e14]/90 p-4 rounded-2xl border border-slate-800/80 flex items-center gap-3 w-full max-w-sm mx-auto text-white font-sans text-right">` +
                         `    <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center font-bold text-xs">AG</div>` +
                         `    <div class="space-y-0.5 flex-1">` +
                         `        <h4 class="text-xs font-bold">Abd Alrahaman gz</h4>` +
                         `        <span class="text-[9px] text-indigo-400 font-mono">Agent Developer</span>` +
                         `    </div>` +
                         `</div>`
            },
            stats: {
                prompt: "Create a micro stats metrics card",
                code: `<div class="bg-slate-950 p-4 rounded-xl border border-slate-800 flex justify-between items-center w-full max-w-sm mx-auto">\n` +
                      `    <div>\n` +
                      `        <span class="text-[9px] text-slate-500 font-bold tracking-wider uppercase">Active Tasks</span>\n` +
                      `        <h4 class="text-lg font-bold mt-0.5">144 / 150</h4>\n` +
                      `    </div>\n` +
                      `    <div class="text-emerald-500 bg-emerald-500/10 p-2 rounded-lg text-xs font-bold">96%</div>\n` +
                      `</div>`,
                preview: `<div class="bg-slate-950 p-4 rounded-xl border border-slate-800 flex justify-between items-center w-full max-w-sm mx-auto text-white font-sans text-right">` +
                         `    <div>` +
                         `        <span class="text-[9px] text-slate-500 font-bold tracking-wider uppercase">Active Tasks</span>` +
                         `        <h4 class="text-lg font-bold mt-0.5">144 / 150</h4>` +
                         `    </div>` +
                         `    <div class="text-emerald-500 bg-emerald-500/10 p-2 rounded-lg text-xs font-bold">96%</div>` +
                         `</div>`
            }
        };

        function selectA2uiPreset(key) {
            const input = document.getElementById('a2ui-prompt-input');
            input.value = a2uiPresets[key].prompt;
        }

        function switchA2uiTab(tabKey) {
            a2uiTab = tabKey;
            const isCode = tabKey === 'code';
            
            document.getElementById('a2ui-tab-btn-code').className = isCode 
                ? "w-1/2 text-center py-2.5 rounded-lg bg-emerald-600/20 text-emerald-300 font-bold border border-emerald-500/30 transition-all cursor-pointer" 
                : "w-1/2 text-center py-2.5 rounded-lg text-slate-500 hover:text-slate-300 transition-all cursor-pointer";
                
            document.getElementById('a2ui-tab-btn-preview').className = !isCode 
                ? "w-1/2 text-center py-2.5 rounded-lg bg-emerald-600/20 text-emerald-300 font-bold border border-emerald-500/30 transition-all cursor-pointer" 
                : "w-1/2 text-center py-2.5 rounded-lg text-slate-500 hover:text-slate-300 transition-all cursor-pointer";
                
            if (isCode) {
                document.getElementById('a2ui-view-code').classList.remove('hidden');
                document.getElementById('a2ui-view-preview').classList.add('hidden');
            } else {
                document.getElementById('a2ui-view-code').classList.add('hidden');
                document.getElementById('a2ui-view-preview').classList.remove('hidden');
            }
        }

        function triggerA2uiBuild() {
            const prompt = document.getElementById('a2ui-prompt-input').value.trim();
            if (!prompt) return;

            const overlay = document.getElementById('a2ui-loading-overlay');
            const overlayText = document.getElementById('a2ui-loading-text');
            const codeBox = document.getElementById('a2ui-code-content');
            const previewViewport = document.getElementById('a2ui-preview-viewport');
            
            const stateLabel = document.getElementById('a2ui-status-state');
            const compiledLabel = document.getElementById('a2ui-status-compiled');

            overlay.classList.remove('hidden');
            stateLabel.innerText = "COMPILING_AST";
            stateLabel.className = "text-emerald-400 font-bold animate-pulse";
            compiledLabel.innerText = "WAITING";

            // Find matching preset or default to card
            let targetPreset = a2uiPresets.card;
            const query = prompt.toLowerCase();
            if (query.includes('chart') || query.includes('رسم') || query.includes('خريطة')) {
                targetPreset = a2uiPresets.chart;
            } else if (query.includes('stats') || query.includes('لوحة') || query.includes('مؤشر')) {
                targetPreset = a2uiPresets.stats;
            }

            setTimeout(() => {
                overlayText.innerText = "Running JSX element compilation...";
            }, 600);

            setTimeout(() => {
                overlayText.innerText = "Rendering preview viewport...";
            }, 1200);

            setTimeout(() => {
                overlay.classList.add('hidden');
                stateLabel.innerText = "IDLE";
                stateLabel.className = "text-slate-400 font-bold";
                compiledLabel.innerText = "SUCCESS (24ms)";
                compiledLabel.className = "text-emerald-500 font-bold";

                // Update Code and Preview
                codeBox.textContent = targetPreset.code;
                previewViewport.innerHTML = targetPreset.preview;

                // Auto switch to preview tab to wow user
                switchA2uiTab('preview');
            }, 1800);
        }

        // --- Day 2 Enhancements: 8. AP2/UCP Micropayments Simulator ---
        let walletBalance = 10.00;
        const ledgerTransactions = [
            { desc: "Wallet initialized", amt: "+$10.00", status: "SUCCESS" }
        ];

        function updateWalletDisplay() {
            document.getElementById('wallet-balance').innerText = `$${walletBalance.toFixed(2)}`;
            const list = document.getElementById('ap2-ledger-list');
            list.innerHTML = ledgerTransactions.map(t => {
                const color = t.amt.startsWith('-') ? 'text-rose-400' : 'text-emerald-400';
                return `<div class="flex justify-between border-b border-slate-950 pb-1">` +
                       `<span>&gt; ${t.desc}</span>` +
                       `<span class="font-bold ${color}">${t.amt} (${t.status})</span>` +
                       `</div>`;
            }).join('');
        }

        function triggerAp2Call(mode) {
            const consentModal = document.getElementById('payments-consent-modal');
            if (mode === 'standard') {
                if (walletBalance >= 0.15) {
                    walletBalance -= 0.15;
                    ledgerTransactions.unshift({ desc: "Standard LLM Token API billing", amt: "-$0.15", status: "AUTO_CHARGED" });
                    updateWalletDisplay();
                }
            } else if (mode === 'heavy') {
                consentModal.classList.remove('hidden');
            }
        }

        function respondConsent(isApproved) {
            const consentModal = document.getElementById('payments-consent-modal');
            consentModal.classList.add('hidden');

            if (isApproved) {
                if (walletBalance >= 2.50) {
                    walletBalance -= 2.50;
                    ledgerTransactions.unshift({ desc: "Premium reasoning agent execution", amt: "-$2.50", status: "AUTH_PAID" });
                    updateWalletDisplay();
                } else {
                    ledgerTransactions.unshift({ desc: "Premium reasoning execution", amt: "-$2.50", status: "INSUFFICIENT_FUNDS" });
                    updateWalletDisplay();
                }
            } else {
                ledgerTransactions.unshift({ desc: "Premium reasoning execution", amt: "-$0.00", status: "USER_REJECTED" });
                updateWalletDisplay();
            }
        }

        // Initialize state defaults
        window.addEventListener('DOMContentLoaded', () => {
            // Set English as default during start so translations map perfectly
            toggleLanguage(); // sets initial language to Arabic (default is ar)
            updateHarness3D();
            switchScenario('stripe');
            toggleModality('conductor');
            updateWalletDisplay();
        });
    