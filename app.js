(() => {
  'use strict';

  const VERSION = 10;
  const SESSION_KEY = 'dancoAssessment_v10_session';
  const SETTINGS_KEY = 'dancoAssessment_v10_settings';
  const APPLICATIONS_KEY = 'dancoAssessment_v10_applications';
  const OWNER_KEY = 'dancoAssessment_v10_owner';
  const TRIAL_KEY = 'dancoAssessment_v10_trial';
  const TRIAL_USAGE_KEY = 'dancoAssessment_v10_trialUsage';
  const ADMIN_HASH = '9793703E';
  const SHARED_SERVICE_URL = 'https://danco-assessment-service.josephrwhelan.chatgpt.site';
  const OWNER_HASH = '5986B210';
  const TRIAL_RUNS = 3;
  const TRIAL_HASHES = new Set(['F083233F','AE44D52A','8CBCD409','AB6BB9D6','C0BA6D81','26399FF4','E2556F1A','9988758A','E61E252E','C495C2E8']);
  const CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const XOR_STREAM = [0x31,0x9a,0x57,0xc4,0x0d,0xe3,0x68,0xb2,0x7f];
  const DISC_INDEX = { D:1, I:2, S:3, C:4 };
  const DISC_CODE = ['', 'D', 'I', 'S', 'C'];

  const TEXT = {
    en:{
      helperLabel:'YOUR DANCO TEAM HELPER',setupHelper:'I’ll guide you through each step. You can take your time setting up before the timed questions begin.',applicationSetupHelper:'Complete as much of the application as you can. Only your full name is required during prototype testing, and the assessment will follow.',stepOne:'STEP 1 OF 3 · SETUP',setupTitle:'Let’s get you ready',setupLead:'Enter your full name exactly as it appears on your application.',applicationSetupTitle:'Start your Danco application',applicationSetupLead:'Tell us about yourself and choose the position you are applying for. Only your full name is required during prototype testing.',nameLabel:'Full name',audioTitle:'Would audio support help?',audioOffTitle:'Continue without audio',audioOffCopy:'You can turn audio on later from the top bar.',audioOnTitle:'Use audio support',audioOnCopy:'Questions and guidance can be read aloud in your chosen language.',audioReasonTitle:'What would the audio support help with?',audioReasonLead:'This helps us apply the right support and record it accurately for the hiring team.',readingSupportTitle:'Reading support',readingSupportCopy:'Reading written questions is difficult.',sightSupportTitle:'Sight support',sightSupportCopy:'Seeing written content clearly is difficult.',audioPreferenceTitle:'Spoken-guidance preference',audioPreferenceCopy:'I prefer to hear the questions read aloud.',supportReasonError:'Please choose what the audio support will help with.',beginAssessment:'Begin assessment',beginApplicationAssessment:'Continue to work-style questions',
      applicationEyebrow:'JOB APPLICATION',applicationDetailsTitle:'Your application details',prototypeOptional:'Optional during prototype testing',emailLabel:'Email address',phoneLabel:'Phone number',locationLabel:'City and state',availabilityLabel:'Available start date',desiredRoleLabel:'Position applied for',chooseRole:'Choose a role',experienceLabel:'Commercial roofing experience',chooseExperience:'Choose experience',workAuthorizationLabel:'Authorized to work in the United States?',licenseLabel:'Valid driver’s license?',chooseAnswer:'Choose an answer',otherRolesLegend:'Would you consider another listed role if it better matches your assessment?',otherRolesYes:'Yes, I’m open to other roles',otherRolesNo:'No, only the role selected above',
      stepTwo:'STEP 2 OF 3 · GETTING TO KNOW YOU',profileIntroTitle:'Before we get into the assessment…',profileIntroOne:'We’re happy that you’re looking to join the Danco Roofing team. We focus on working together and helping our workforce feel comfortable when interacting with one another.',profileIntroTwo:'We’d like to take a moment to get to know how you prefer to work. The next five friendly questions have no timer, and there are no right or wrong answers.',profilePrivacy:'This optional section is used only as a gentle workplace-engagement guide for the hiring team. Your estimated result will not be shown on your applicant result screen.',startFive:'Answer 5 quick questions',skipProfile:'Skip this section',skipRecorded:'If you skip, the assessment report will simply note “not completed”.',noTimer:'NO TIMER',profileHint:'Choose the answer that feels most natural to you.',confirmAnswerHint:'Select an option, then confirm it.',confirmFinalAnswer:'Confirm final answer',answerSelectedHint:'Your choice is selected. Confirm it or choose another option.',
      stepThree:'STEP 3 OF 3 · TRADE ASSESSMENT',instructionsTitle:'Ten focused questions',instructionsLead:'The assessment checks practical roofing knowledge, safe decision-making and role readiness.',featureQuestions:'Questions',featureQuestionsCopy:'Seven include visual answer choices',featureTiming:'Review then answer',featureTimingCopy:'A clear timer appears for each stage',featureChoice:'One answer',featureChoiceCopy:'Choose the single best response',featureResult:'Private result',featureResultCopy:'You receive a result code, not a score',timingNotice:'First, review the question while the answer cards are locked. When the answer timer begins, select one response. Unanswered questions are recorded as timed out.',supportActiveTitle:'Accessibility support is active.',supportActiveCopy:'Extra answer time and the Repeat question control are enabled.',repeatQuestion:'Repeat question',startQuestions:'Start the 10 questions',
      completeEyebrow:'ASSESSMENT COMPLETE',completeTitle:'Thank you for taking part',completeLead:'Your responses have been converted into the result code below.',applicationCompleteEyebrow:'APPLICATION ASSESSMENT COMPLETE',applicationCompleteTitle:'Your application assessment is complete',applicationCompleteLead:'Ask an administrator to approve secure submission when you are ready.',applicationSubmittedTitle:'Thank you for your application',applicationSubmittedLead:'Your application has been received. Danco will contact you after it has been reviewed.',resultCodeLabel:'Result code',applicationNumberLabel:'Application reference',applicationReferencePending:'Pending secure submission',appliedPositionLabel:'Position applied for',otherPositionsLabel:'Open to other listed positions',notSpecified:'Not specified',yesLabel:'Yes',noLabel:'No',copyCode:'Copy result code',copyApplicationNumber:'Copy application reference',resultInstruction:'Save this code and provide it to the Danco administrator or hiring contact. Your score and private work-style guide are not shown on this screen.',applicationResultInstruction:'Your score and private work-style guide are not displayed. Ask an administrator to approve secure submission.',applicationSubmittedInstruction:'Keep this reference for your records. Your full result is available only in the protected Danco administrator dashboard.',submitApplication:'Submit application for review',submitAssessment:'Submit assessment for review',submitApplicationNote:'Prototype safeguard: an administrator PIN is required before this result is added to the shared review list.',submitTitle:'Confirm secure submission',submitCopy:'Enter the administrator PIN to add this completed result to the shared Danco review list.',administratorPin:'Administrator PIN',confirmSubmit:'Submit securely',submissionSaved:'Submission saved to the shared Danco review list.',submissionAlreadySaved:'This submission is already in the shared review list.',submissionFailed:'The shared service could not save this result. Check the connection and try again.',invalidAdminPin:'Administrator PIN not recognised.',nextApplicant:'Start next applicant',help:'Help',helpTitle:'Need a hand?',helpDefault:'Follow the instruction shown at the top of the current screen. During the timed assessment, review first and select one answer when the cards become active.',repeatAudio:'Repeat spoken audio',repeatAudioHint:'Hear the current instruction or question again.',voiceLabel:'Narration audio',standardVoiceTitle:'Danco standard voice',standardVoiceCopy:'The same clear recorded narration on iPhone, Android and desktop.',testVoice:'Test standard narration',voiceSample:'Hello. I’m your Danco assessment guide. I’ll read each question clearly.',narrationUnavailable:'This narration clip is unavailable. The written question remains on screen.',tapRepeatAudio:'Tap Repeat spoken audio to hear this again.',gotIt:'Got it',helpersWithYou:'Your Danco team helpers are with you',profileUntimedReminder:'Take your time—this section is not timed.',timedReminder:'Your selected-language helper has the visual focus.',fullscreenOn:'Full-screen app view active.',fullscreenOff:'Full-screen app view closed.',fullscreenIos:'App view expanded. For a completely borderless iPhone experience, add the assessment to your Home Screen.',
      unlockTitle:'Unlock the assessment trial',unlockCopy:'Enter the private access code supplied by Danco. A valid trial code activates up to three completed assessments on this browser or device.',unlockStepOne:'Enter the supplied code below.',unlockStepTwo:'Select “Activate trial”.',unlockStepThree:'Return to setup and begin the assessment.',accessCodeLabel:'Private access code',activateTrial:'Activate trial',unlockPrivacy:'Codes are never displayed by the app. Re-entering the same code does not restore used trial runs.',
      accessLockedTitle:'Prototype locked',accessLockedCopy:'Enter the private trial code supplied by Danco before beginning.',accessTrialTitle:'Prototype trial active',accessTrialCopy:n=>`${n} completed assessment${n===1?'':'s'} remaining on this browser or device.`,accessOwnerTitle:'Full access active',accessOwnerCopy:'Unlimited local assessments are enabled on this device.',namePlaceholder:'Your full name',codePlaceholder:'Enter code',requiredError:'Please enter your full name.',lockedError:'A valid private access code is required before the assessment can begin.',usedError:'This trial has no completed assessments remaining.',profileCounter:(n)=>`Question ${n} of 5`,knowledgeCounter:(n)=>`Question ${n} of 10`,review:'REVIEW',answer:'ANSWER',reviewHint:'Review the question. Answer choices will unlock when the timer changes to ANSWER.',answerHint:'Select the single best answer and confirm it before the timer reaches zero.',timedOut:'Time expired. Moving to the next question.',copied:'Result code copied.',copyFailed:'Press and hold the code to copy it.',profileSkipped:'Optional work-style questions: not completed',profileDone:'Optional work-style questions: completed',trialRemaining:n=>`Trial assessments remaining: ${n}`,ownerActive:'Full access · unlimited assessments',unlockSuccess:n=>`Trial activated with ${n} assessments available.`,ownerSuccess:'Full access activated.',invalidCode:'Access code not recognised.',resume:'Resume assessment',
      categories:{materials:'Roof products',installation:'Installation & tools',service:'Service & diagnosis',safety:'Site & lifting safety',supervision:'Foreman control'},tiers:{foundation:'Foundation',roofer:'Roofer level',foreman:'Foreman level'}
    },
    es:{
      helperLabel:'TU GUÍA DEL EQUIPO DANCO',setupHelper:'Te guiaré en cada paso. Puedes tomarte tu tiempo para prepararte antes de que comiencen las preguntas cronometradas.',applicationSetupHelper:'Completa todos los datos que puedas. Durante la prueba del prototipo solo se requiere tu nombre completo, y después seguirá la evaluación.',stepOne:'PASO 1 DE 3 · PREPARACIÓN',setupTitle:'Vamos a prepararte',setupLead:'Ingresa tu nombre completo exactamente como aparece en tu solicitud.',applicationSetupTitle:'Comienza tu solicitud para Danco',applicationSetupLead:'Cuéntanos sobre ti y elige el puesto que solicitas. Durante la prueba del prototipo solo se requiere tu nombre completo.',nameLabel:'Nombre completo',audioTitle:'¿Te ayudaría el apoyo de audio?',audioOffTitle:'Continuar sin audio',audioOffCopy:'Puedes activar el audio más tarde desde la barra superior.',audioOnTitle:'Usar apoyo de audio',audioOnCopy:'Las preguntas y la guía se pueden leer en voz alta en español.',audioReasonTitle:'¿Con qué te ayudaría el apoyo de audio?',audioReasonLead:'Esto nos permite aplicar el apoyo adecuado y registrarlo correctamente para el equipo de contratación.',readingSupportTitle:'Apoyo para la lectura',readingSupportCopy:'Me resulta difícil leer las preguntas escritas.',sightSupportTitle:'Apoyo para la vista',sightSupportCopy:'Me resulta difícil ver claramente el contenido escrito.',audioPreferenceTitle:'Preferencia por la guía hablada',audioPreferenceCopy:'Prefiero escuchar las preguntas en voz alta.',supportReasonError:'Elige con qué te ayudará el apoyo de audio.',beginAssessment:'Comenzar evaluación',beginApplicationAssessment:'Continuar a las preguntas de estilo laboral',
      applicationEyebrow:'SOLICITUD DE EMPLEO',applicationDetailsTitle:'Datos de tu solicitud',prototypeOptional:'Opcional durante la prueba del prototipo',emailLabel:'Correo electrónico',phoneLabel:'Número de teléfono',locationLabel:'Ciudad y estado',availabilityLabel:'Fecha disponible para comenzar',desiredRoleLabel:'Puesto solicitado',chooseRole:'Elige un puesto',experienceLabel:'Experiencia en techos comerciales',chooseExperience:'Elige tu experiencia',workAuthorizationLabel:'¿Tienes autorización para trabajar en Estados Unidos?',licenseLabel:'¿Tienes licencia de conducir válida?',chooseAnswer:'Elige una respuesta',otherRolesLegend:'¿Considerarías otro puesto de la lista si se ajusta mejor a tu evaluación?',otherRolesYes:'Sí, estoy abierto a otros puestos',otherRolesNo:'No, solo el puesto seleccionado',
      stepTwo:'PASO 2 DE 3 · CONOCERTE',profileIntroTitle:'Antes de comenzar la evaluación…',profileIntroOne:'Nos alegra que estés interesado en unirte al equipo de Danco Roofing. Nos enfocamos en trabajar juntos y en ayudar a nuestro personal a sentirse cómodo al interactuar.',profileIntroTwo:'Nos gustaría conocerte un poco y saber cómo prefieres trabajar. Las siguientes cinco preguntas son sencillas, no tienen límite de tiempo y no hay respuestas correctas o incorrectas.',profilePrivacy:'Esta sección opcional se usa únicamente como una guía amable de interacción laboral para el equipo de contratación. El resultado estimado no aparecerá en tu pantalla final.',startFive:'Responder 5 preguntas rápidas',skipProfile:'Omitir esta sección',skipRecorded:'Si decides omitirla, el informe simplemente indicará “no completada”.',noTimer:'SIN LÍMITE',profileHint:'Elige la respuesta que te resulte más natural.',confirmAnswerHint:'Selecciona una opción y después confírmala.',confirmFinalAnswer:'Confirmar respuesta final',answerSelectedHint:'Tu opción está seleccionada. Confírmala o elige otra.',
      stepThree:'PASO 3 DE 3 · EVALUACIÓN TÉCNICA',instructionsTitle:'Diez preguntas enfocadas',instructionsLead:'La evaluación revisa conocimientos prácticos de techado, decisiones seguras y preparación para el puesto.',featureQuestions:'Preguntas',featureQuestionsCopy:'Siete incluyen opciones visuales',featureTiming:'Revisar y responder',featureTimingCopy:'Cada etapa muestra un cronómetro claro',featureChoice:'Una respuesta',featureChoiceCopy:'Elige la mejor respuesta',featureResult:'Resultado privado',featureResultCopy:'Recibirás un código, no una puntuación',timingNotice:'Primero revisa la pregunta mientras las opciones están bloqueadas. Cuando comience el tiempo de respuesta, selecciona una opción. Las preguntas sin responder se registran como agotadas.',supportActiveTitle:'El apoyo de accesibilidad está activo.',supportActiveCopy:'Se habilitaron tiempo adicional y el control Repetir pregunta.',repeatQuestion:'Repetir pregunta',startQuestions:'Comenzar las 10 preguntas',
      completeEyebrow:'EVALUACIÓN COMPLETADA',completeTitle:'Gracias por participar',completeLead:'Tus respuestas se convirtieron en el siguiente código de resultado.',applicationCompleteEyebrow:'EVALUACIÓN DE SOLICITUD COMPLETADA',applicationCompleteTitle:'La evaluación de tu solicitud está completa',applicationCompleteLead:'Cuando estés listo, pide a un administrador que autorice el envío seguro.',applicationSubmittedTitle:'Gracias por tu solicitud',applicationSubmittedLead:'Hemos recibido tu solicitud. Danco se pondrá en contacto contigo después de revisarla.',resultCodeLabel:'Código de resultado',applicationNumberLabel:'Referencia de solicitud',applicationReferencePending:'Envío seguro pendiente',appliedPositionLabel:'Puesto solicitado',otherPositionsLabel:'Abierto a otros puestos de la lista',notSpecified:'No especificado',yesLabel:'Sí',noLabel:'No',copyCode:'Copiar código',copyApplicationNumber:'Copiar referencia de solicitud',resultInstruction:'Guarda este código y entrégalo al administrador o contacto de contratación de Danco. Tu puntuación y la guía privada de estilo de trabajo no aparecen en esta pantalla.',applicationResultInstruction:'Tu puntuación y la guía privada de estilo de trabajo no se muestran. Pide a un administrador que autorice el envío seguro.',applicationSubmittedInstruction:'Guarda esta referencia. Tu resultado completo solo está disponible en el panel protegido del administrador de Danco.',submitApplication:'Enviar solicitud para revisión',submitAssessment:'Enviar evaluación para revisión',submitApplicationNote:'Protección del prototipo: se requiere el PIN de administrador antes de añadir el resultado a la lista compartida.',submitTitle:'Confirmar envío seguro',submitCopy:'Ingresa el PIN de administrador para añadir este resultado completo a la lista compartida de Danco.',administratorPin:'PIN de administrador',confirmSubmit:'Enviar de forma segura',submissionSaved:'Resultado guardado en la lista compartida de Danco.',submissionAlreadySaved:'Este resultado ya está en la lista compartida.',submissionFailed:'El servicio compartido no pudo guardar el resultado. Comprueba la conexión e inténtalo de nuevo.',invalidAdminPin:'PIN de administrador no reconocido.',nextApplicant:'Comenzar siguiente solicitante',help:'Ayuda',helpTitle:'¿Necesitas ayuda?',helpDefault:'Sigue la instrucción que aparece en la parte superior. Durante la evaluación cronometrada, primero revisa y luego elige una respuesta cuando se activen las opciones.',repeatAudio:'Repetir audio',repeatAudioHint:'Escucha de nuevo la instrucción o pregunta actual.',voiceLabel:'Audio de narración',standardVoiceTitle:'Voz estándar de Danco',standardVoiceCopy:'La misma narración clara en iPhone, Android y computadora.',testVoice:'Probar narración estándar',voiceSample:'Hola. Soy tu guía para la evaluación de Danco. Leeré cada pregunta con claridad.',narrationUnavailable:'Este fragmento de audio no está disponible. La pregunta escrita permanece en pantalla.',tapRepeatAudio:'Toca Repetir audio para escucharlo de nuevo.',gotIt:'Entendido',helpersWithYou:'Tus guías del equipo Danco están contigo',profileUntimedReminder:'Tómate tu tiempo; esta sección no tiene límite.',timedReminder:'La guía de tu idioma elegido tiene el enfoque visual.',fullscreenOn:'Vista de aplicación en pantalla completa activa.',fullscreenOff:'Vista de pantalla completa cerrada.',fullscreenIos:'Vista ampliada. Para una experiencia sin bordes en iPhone, agrega la evaluación a la pantalla de inicio.',
      unlockTitle:'Desbloquear la prueba',unlockCopy:'Ingresa el código privado proporcionado por Danco. Un código de prueba válido permite hasta tres evaluaciones completadas en este navegador o dispositivo.',unlockStepOne:'Ingresa el código proporcionado.',unlockStepTwo:'Selecciona “Activar prueba”.',unlockStepThree:'Regresa a la preparación y comienza.',accessCodeLabel:'Código de acceso privado',activateTrial:'Activar prueba',unlockPrivacy:'La aplicación nunca muestra los códigos. Volver a ingresar el mismo código no recupera usos ya consumidos.',
      accessLockedTitle:'Prototipo bloqueado',accessLockedCopy:'Ingresa el código privado de prueba proporcionado por Danco antes de comenzar.',accessTrialTitle:'Prueba de prototipo activa',accessTrialCopy:n=>`Quedan ${n} evaluación${n===1?'':'es'} completada${n===1?'':'s'} en este navegador o dispositivo.`,accessOwnerTitle:'Acceso completo activo',accessOwnerCopy:'Este dispositivo tiene evaluaciones locales ilimitadas.',namePlaceholder:'Tu nombre completo',codePlaceholder:'Ingresa el código',requiredError:'Ingresa tu nombre completo.',lockedError:'Se necesita un código de acceso privado válido antes de comenzar.',usedError:'Esta prueba ya no tiene evaluaciones disponibles.',profileCounter:(n)=>`Pregunta ${n} de 5`,knowledgeCounter:(n)=>`Pregunta ${n} de 10`,review:'REVISAR',answer:'RESPONDER',reviewHint:'Revisa la pregunta. Las opciones se activarán cuando el cronómetro cambie a RESPONDER.',answerHint:'Selecciona la mejor respuesta y confírmala antes de que el cronómetro llegue a cero.',timedOut:'Tiempo agotado. Pasando a la siguiente pregunta.',copied:'Código copiado.',copyFailed:'Mantén presionado el código para copiarlo.',profileSkipped:'Preguntas opcionales de estilo de trabajo: no completadas',profileDone:'Preguntas opcionales de estilo de trabajo: completadas',trialRemaining:n=>`Evaluaciones de prueba restantes: ${n}`,ownerActive:'Acceso completo · evaluaciones ilimitadas',unlockSuccess:n=>`Prueba activada con ${n} evaluaciones disponibles.`,ownerSuccess:'Acceso completo activado.',invalidCode:'Código de acceso no reconocido.',resume:'Continuar evaluación',
      categories:{materials:'Productos para techos',installation:'Instalación y herramientas',service:'Servicio y diagnóstico',safety:'Seguridad en obra e izaje',supervision:'Control del encargado'},tiers:{foundation:'Base',roofer:'Nivel techador',foreman:'Nivel encargado'}
    }
  };

  const PROFILE_QUESTIONS = [
    {en:'When a new team task begins, what feels most natural?',es:'Cuando comienza una nueva tarea en equipo, ¿qué te resulta más natural?',options:[
      {disc:'D',en:'Get moving and focus on the result',es:'Comenzar y enfocarme en el resultado'},
      {disc:'S',en:'Make sure everyone is comfortable with the plan',es:'Asegurarme de que todos estén cómodos con el plan'},
      {disc:'I',en:'Talk it through and build some energy',es:'Conversarlo y crear entusiasmo'},
      {disc:'C',en:'Check the details and expectations first',es:'Revisar primero los detalles y expectativas'}]},
    {en:'If plans change unexpectedly, what usually helps you most?',es:'Si los planes cambian de repente, ¿qué suele ayudarte más?',options:[
      {disc:'C',en:'Clear facts and an updated plan',es:'Datos claros y un plan actualizado'},
      {disc:'I',en:'A quick conversation with the team',es:'Una conversación rápida con el equipo'},
      {disc:'D',en:'Freedom to make a practical decision',es:'Libertad para tomar una decisión práctica'},
      {disc:'S',en:'A calm explanation and time to adjust',es:'Una explicación tranquila y tiempo para adaptarme'}]},
    {en:'How do you prefer a coworker to explain something important?',es:'¿Cómo prefieres que un compañero explique algo importante?',options:[
      {disc:'S',en:'Patiently, with time for questions',es:'Con paciencia y tiempo para preguntas'},
      {disc:'D',en:'Directly, with the key action first',es:'Directamente, empezando por la acción principal'},
      {disc:'C',en:'Precisely, with the correct detail',es:'Con precisión y el detalle correcto'},
      {disc:'I',en:'In a friendly, conversational way',es:'De manera amable y conversacional'}]},
    {en:'On a busy workday, which contribution sounds most like you?',es:'En un día de mucho trabajo, ¿qué aporte se parece más a ti?',options:[
      {disc:'I',en:'Keeping communication positive',es:'Mantener una comunicación positiva'},
      {disc:'C',en:'Keeping the work organised and accurate',es:'Mantener el trabajo organizado y preciso'},
      {disc:'S',en:'Keeping a steady and dependable pace',es:'Mantener un ritmo constante y confiable'},
      {disc:'D',en:'Keeping the team focused on completion',es:'Mantener al equipo enfocado en terminar'}]},
    {en:'When learning a new task, what approach suits you best?',es:'Al aprender una tarea nueva, ¿qué enfoque te conviene más?',options:[
      {disc:'D',en:'Let me try it and improve as I go',es:'Permíteme intentarlo y mejorar sobre la marcha'},
      {disc:'I',en:'Show me with someone I can ask',es:'Muéstramelo con alguien a quien pueda preguntar'},
      {disc:'C',en:'Give me clear instructions and standards',es:'Dame instrucciones y estándares claros'},
      {disc:'S',en:'Take me through it step by step',es:'Guíame paso a paso'}]}
  ];

  const QUESTIONS = [
    {id:1,tier:'foundation',cat:'materials',critical:false,read:8,answer:20,hideText:true,
      en:'Which product is EPDM membrane?',es:'¿Qué producto es una membrana EPDM?',
      options:[
        {en:'Black EPDM rubber membrane',es:'Membrana de caucho EPDM negra',img:'visual-epdm.png'},
        {en:'White TPO membrane',es:'Membrana TPO blanca',img:'visual-tpo.png'},
        {en:'PVC membrane',es:'Membrana PVC',img:'visual-pvc.png'},
        {en:'Standing-seam metal roofing',es:'Techo metálico de junta alzada',img:'visual-metal.png'}],correct:0},
    {id:2,tier:'roofer',cat:'installation',critical:false,read:9,answer:22,hideText:true,
      en:'Which image shows the correct mechanically attached TPO seam?',es:'¿Qué imagen muestra la junta TPO con fijación mecánica correcta?',
      options:[
        {en:'Concealed fastening row with a clean heat weld',es:'Fijación oculta y soldadura térmica limpia',img:'visual-tpo_correct.png'},
        {en:'Exposed fastening plates beside the lap',es:'Placas de fijación expuestas junto al traslape',img:'visual-tpo_exposed.png'},
        {en:'Wrinkled lap with an open fishmouth',es:'Traslape arrugado con una boca de pez abierta',img:'visual-tpo_fishmouth.png'},
        {en:'Poor field layout with pronounced wrinkles',es:'Distribución deficiente con arrugas marcadas',img:'visual-tpo_badlayout.png'}],correct:0},
    {id:3,tier:'foundation',cat:'safety',critical:true,read:8,answer:18,
      en:'Roof-access ladder rails should extend at least:',es:'Los rieles de una escalera de acceso al techo deben sobresalir al menos:',
      options:[
        {en:'3 ft above the landing',es:'3 pies sobre el punto de acceso',img:'visual-ladder-3ft.png'},
        {en:'1 ft above the landing',es:'1 pie sobre el punto de acceso',img:'visual-ladder-1ft.png'},
        {en:'2 ft above the landing',es:'2 pies sobre el punto de acceso',img:'visual-ladder-2ft.png'},
        {en:'Flush with the landing',es:'Al ras del punto de acceso',img:'visual-ladder-flush.png'}],correct:0},
    {id:4,tier:'roofer',cat:'installation',critical:false,read:8,answer:20,
      en:'Which tool checks a cooled TPO weld?',es:'¿Qué herramienta revisa una soldadura TPO ya enfriada?',
      options:[
        {en:'Seam probe',es:'Sonda de junta',img:'visual-tool-seam-probe.png'},
        {en:'Core cutter',es:'Cortador de núcleo',img:'visual-tool-core-cutter.png'},
        {en:'Chalk reel',es:'Cordel con tiza',img:'visual-tool-chalk-reel.png'},
        {en:'Tin snips',es:'Tijeras para metal',img:'visual-tool-tin-snips.png'}],correct:0},
    {id:5,tier:'roofer',cat:'installation',critical:false,read:8,answer:20,
      en:'The TPO lap is dirty before welding. What is the first move?',es:'El traslape TPO está sucio antes de soldar. ¿Cuál es el primer paso?',
      options:[
        {en:'Clean and dry the welding area',es:'Limpiar y secar el área de soldadura',img:'visual-action-clean-dry.png'},
        {en:'Increase the welder heat',es:'Aumentar el calor del soldador',img:'visual-action-more-heat.png'},
        {en:'Increase the sheet overlap',es:'Aumentar el traslape de la lámina',img:'visual-action-more-overlap.png'},
        {en:'Seal over the contaminated lap',es:'Sellar encima del traslape contaminado',img:'visual-action-seal-over.png'}],correct:0},
    {id:6,tier:'foundation',cat:'service',critical:false,read:7,answer:18,
      en:'You uncover wet roof insulation. What should happen next?',es:'Encuentras aislamiento húmedo en el techo. ¿Qué debe hacerse después?',
      options:[
        {en:'Remove and replace the affected material',es:'Retirar y reemplazar el material afectado'},
        {en:'Cover it with the new membrane',es:'Cubrirlo con la membrana nueva'},
        {en:'Add dry coverboard over it',es:'Agregar tablero seco encima'},
        {en:'Leave it until final inspection',es:'Dejarlo hasta la inspección final'}],correct:0},
    {id:7,tier:'roofer',cat:'service',critical:false,read:8,answer:20,
      en:'An interior stain is 20 ft from a rooftop curb. Where should diagnosis begin?',es:'Una mancha interior está a 20 pies de un pretil del techo. ¿Dónde debe comenzar el diagnóstico?',
      options:[
        {en:'Trace likely water-entry paths',es:'Rastrear las posibles rutas de entrada de agua'},
        {en:'Cut the roof directly above the stain',es:'Cortar el techo directamente sobre la mancha'},
        {en:'Seal every nearby curb',es:'Sellar todos los pretiles cercanos'},
        {en:'Replace the ceiling below',es:'Reemplazar el cielo raso inferior'}],correct:0},
    {id:8,tier:'foreman',cat:'safety',critical:true,read:8,answer:20,
      en:'The crane operator cannot see the roof landing point. Who gives the signals?',es:'El operador de la grúa no puede ver el punto de descarga en el techo. ¿Quién da las señales?',
      options:[
        {en:'A qualified signal person',es:'Una persona señalera calificada',img:'visual-signal-qualified.png'},
        {en:'The nearest roofer',es:'El techador más cercano',img:'visual-signal-roofer.png'},
        {en:'The delivery driver',es:'El conductor de entrega',img:'visual-signal-driver.png'},
        {en:'Nobody if radios are available',es:'Nadie si hay radios disponibles',img:'visual-signal-none.png'}],correct:0},
    {id:9,tier:'foreman',cat:'supervision',critical:false,read:8,answer:20,
      en:'Weather conditions change and the TPO test weld fails. What is the next move?',es:'Cambian las condiciones climáticas y falla la soldadura de prueba TPO. ¿Qué sigue?',
      options:[
        {en:'Reset the welding settings and complete a new test',es:'Reajustar la soldadura y completar una nueva prueba'},
        {en:'Reduce the robot speed only',es:'Reducir únicamente la velocidad del robot'},
        {en:'Continue welding and probe it later',es:'Continuar soldando y revisarlo después'},
        {en:'Cover the failed weld with tape',es:'Cubrir la soldadura fallida con cinta'}],correct:0},
    {id:10,tier:'foreman',cat:'installation',critical:false,read:8,answer:20,
      en:'Wind-uplift attachment is normally greatest in which roof zones?',es:'¿En qué zonas del techo suele ser mayor la fijación contra la succión del viento?',
      options:[
        {en:'Corners and perimeter',es:'Esquinas y perímetro',img:'visual-zone-perimeter.png'},
        {en:'Field centre only',es:'Solo el centro del techo',img:'visual-zone-center.png'},
        {en:'Around roof drains only',es:'Solo alrededor de los desagües',img:'visual-zone-drain.png'},
        {en:'Equally across all zones',es:'Igual en todas las zonas',img:'visual-zone-equal.png'}],correct:0}
  ];

  const $ = id => document.getElementById(id);
  const $$ = selector => Array.from(document.querySelectorAll(selector));
  const SCREENS = ['language-screen','setup-screen','profile-intro-screen','profile-screen','instructions-screen','knowledge-screen','result-screen'];
  let settings = loadJson(SETTINGS_KEY, {lang:'en',audio:false,supportReason:0,appMode:'assessment'});
  settings.appMode=settings.appMode==='application'?'application':'assessment';
  let session = loadJson(SESSION_KEY, null);
  let profileIndex = 0;
  let timer = null;
  let phase = 'review';
  let phaseRemaining = 0;
  let optionLocked = false;
  let profileSelectedIndex = null;
  let knowledgeSelectedIndex = null;
  let currentDisplayOptions = [];
  let adminAuthenticated = false;
  let adminAccessPin = '';
  let currentSharedReference = '';
  let currentQueueStatus = 'pending';
  let sharedQueueRecords = [];
  let nativeFullscreenActive = false;

  function t(key, ...args){ const value = TEXT[settings.lang]?.[key] ?? TEXT.en[key] ?? key; return typeof value === 'function' ? value(...args) : value; }
  function loadJson(key, fallback){ try{ const raw=localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }catch(_){ return fallback; } }
  function saveJson(key, value){ try{ localStorage.setItem(key, JSON.stringify(value)); }catch(_){} }
  function saveSettings(){ saveJson(SETTINGS_KEY, settings); }
  function saveSession(){ if(session) saveJson(SESSION_KEY, session); }
  function storedApplications(){ const value=loadJson(APPLICATIONS_KEY,[]); return Array.isArray(value)?value:[]; }
  async function sharedRequest(path,payload){
    const response=await fetch(`${SHARED_SERVICE_URL}${path}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
    let data={}; try{data=await response.json();}catch(_){}
    if(!response.ok) throw new Error(data.error||'The shared submission service is unavailable.');
    return data;
  }
  function escapeHtml(value){ return String(value ?? '').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
  function normalizeCode(value){ return String(value||'').toUpperCase().replace(/[^A-Z0-9]/g,''); }
  function accessHash(value){ let h=0x811c9dc5; for(const c of normalizeCode(value)){ h^=c.charCodeAt(0); h=Math.imul(h,0x01000193)>>>0; } return h.toString(16).toUpperCase().padStart(8,'0'); }
  function isOwner(){ return localStorage.getItem(OWNER_KEY)==='1'; }
  function trialHash(){ const h=localStorage.getItem(TRIAL_KEY)||''; return TRIAL_HASHES.has(h)?h:''; }
  function trialUsage(){ return loadJson(TRIAL_USAGE_KEY, {}); }
  function trialRemaining(){ const h=trialHash(); if(!h) return 0; const usage=trialUsage(); return Math.max(0, Number(usage[h]?.remaining ?? 0)); }
  function accessMode(){ if(isOwner()) return 'owner'; if(trialHash()) return 'trial'; return 'locked'; }
  function canBegin(){ return isOwner() || (trialHash() && trialRemaining()>0); }
  function consumeTrialCompletion(){
    if(isOwner() || session?.trialConsumed) return;
    const h=trialHash(); if(!h) return;
    const usage=trialUsage(); if(!usage[h]) usage[h]={remaining:TRIAL_RUNS,activatedAt:Date.now()};
    usage[h].remaining=Math.max(0,Number(usage[h].remaining||0)-1); usage[h].lastCompletedAt=Date.now();
    saveJson(TRIAL_USAGE_KEY,usage); session.trialConsumed=true;
  }
  function activateCode(raw){
    const h=accessHash(raw);
    if(h===OWNER_HASH){ localStorage.setItem(OWNER_KEY,'1'); applyAccessState(); return {mode:'owner'}; }
    if(!TRIAL_HASHES.has(h)) throw new Error(t('invalidCode'));
    const usage=trialUsage(); if(!usage[h]) usage[h]={remaining:TRIAL_RUNS,activatedAt:Date.now()};
    saveJson(TRIAL_USAGE_KEY,usage); localStorage.setItem(TRIAL_KEY,h); applyAccessState();
    return {mode:'trial',remaining:Math.max(0,Number(usage[h].remaining||0))};
  }

  function applyAccessState(){
    const mode=accessMode(); const remaining=trialRemaining();
    document.body.classList.toggle('owner-access',mode==='owner');
    document.body.classList.toggle('prototype-locked',mode==='locked');
    document.body.classList.toggle('prototype-trial',mode==='trial');
    $('access-status').textContent=mode==='owner'?'FULL ACCESS':mode==='trial'?`PROTOTYPE TRIAL · ${remaining}`:'PROTOTYPE';
    $('locked-callout').classList.toggle('hidden',mode!=='locked');
    renderSetupAccess();
  }
  function renderSetupAccess(){
    const card=$('setup-access-card'); if(!card) return;
    const mode=accessMode(); card.className=`access-card ${mode==='locked'?'locked':mode==='trial'?'trial':''}`;
    if(mode==='owner') card.innerHTML=`<b>${escapeHtml(t('accessOwnerTitle'))}</b>${escapeHtml(t('accessOwnerCopy'))}`;
    else if(mode==='trial') card.innerHTML=`<b>${escapeHtml(t('accessTrialTitle'))}</b>${escapeHtml(t('accessTrialCopy',trialRemaining()))}`;
    else card.innerHTML=`<b>${escapeHtml(t('accessLockedTitle'))}</b>${escapeHtml(t('accessLockedCopy'))}`;
  }

  function setLanguage(lang){
    settings.lang=lang==='es'?'es':'en'; saveSettings(); document.documentElement.lang=settings.lang;
    $$('[data-i18n]').forEach(el=>{ const value=t(el.dataset.i18n); if(typeof value==='string') el.textContent=value; });
    $('candidate-name').placeholder=t('namePlaceholder'); $('unlock-code').placeholder=t('codePlaceholder');
    $('language-toggle').textContent=settings.lang==='en'?'ES':'EN';
    const helper=settings.lang==='en'?'danco-helper-english.png':'danco-helper-spanish.png';
    const secondary=settings.lang==='en'?'danco-helper-spanish.png':'danco-helper-english.png';
    ['setup-helper','profile-intro-helper','instructions-helper','help-helper'].forEach(id=>$(id).src=helper);
    ['setup-helper-secondary','profile-intro-helper-secondary','instructions-helper-secondary','help-helper-secondary'].forEach(id=>$(id).src=secondary);
    $$('[data-helper-duo]').forEach(duo=>{
      const portraits=duo.querySelectorAll('.helper-portrait');
      portraits.forEach((portrait,index)=>portrait.classList.toggle('is-primary',settings.lang==='en'?index===0:index===1));
    });
    $('result-helper-english').classList.toggle('secondary-language',settings.lang!=='en');
    $('result-helper-spanish').classList.toggle('secondary-language',settings.lang!=='es');
    $('help-tab').classList.toggle('right',settings.lang==='es'); $('help-drawer').classList.toggle('right',settings.lang==='es');
    renderSetupAccess(); applyProductMode(); renderAudioSupportControls();
  }
  function activeProductMode(){ return session?.mode==='application'?'application':session?.mode==='assessment'?'assessment':settings.appMode; }
  function normaliseSupportReason(value){ const reason=Number(value||0); return reason>=1&&reason<=3?reason:0; }
  function currentSupportReason(){
    const source=session&&session.status!=='setup'?session:settings;
    return source?.audio?normaliseSupportReason(source.supportReason):0;
  }
  function accessibilitySupportActive(){ const reason=currentSupportReason(); return reason===2||reason===3; }
  function supportReportInfo(data){
    if(!data?.audio) return {label:'No audio support',detail:''};
    const reason=normaliseSupportReason(data.supportReason);
    if(reason===2) return {label:'Reading support requested',detail:'Recorded narration, 15 seconds of additional answer time and Repeat question were enabled.'};
    if(reason===3) return {label:'Sight support requested',detail:'Recorded narration, 15 seconds of additional answer time and Repeat question were enabled.'};
    return {label:'Spoken-guidance preference',detail:'Recorded narration was enabled without additional accessibility time.'};
  }
  function renderAudioSupportControls(){
    const reason=normaliseSupportReason(settings.supportReason);
    $$('.setup-choice').forEach(button=>button.classList.toggle('selected',(button.dataset.audio==='on')===settings.audio));
    const reasonFieldset=$('support-reason-fieldset'); if(reasonFieldset) reasonFieldset.hidden=!settings.audio;
    $$('[data-support-reason]').forEach(button=>{const selected=Number(button.dataset.supportReason)===reason;button.classList.toggle('selected',selected);button.setAttribute('aria-pressed',String(selected));});
    if($('audio-toggle')) $('audio-toggle').textContent=settings.audio?'🔊':'🔇';
    if($('accessibility-notice')) $('accessibility-notice').hidden=!accessibilitySupportActive();
  }
  function setAudioSupport(enabled,{askReason=false}={}){
    settings.audio=!!enabled;
    if(!settings.audio) settings.supportReason=0;
    else if(!normaliseSupportReason(settings.supportReason)&&!askReason) settings.supportReason=1;
    saveSettings();
    if(session&&session.status!=='complete'){
      session.audio=settings.audio;
      session.supportReason=settings.audio?normaliseSupportReason(settings.supportReason):0;
      saveSession();
    }
    renderAudioSupportControls();
    if(!settings.audio) cancelSpeech();
  }
  function selectAudioSupportReason(value){
    settings.audio=true; settings.supportReason=normaliseSupportReason(value); saveSettings();
    if(session&&session.status!=='complete'){session.audio=true;session.supportReason=settings.supportReason;saveSession();}
    renderAudioSupportControls(); $('setup-error').textContent='';
  }
  function applyProductMode(){
    const applicationMode=activeProductMode()==='application';
    document.body.classList.toggle('application-mode',applicationMode);
    if($('application-fields')) $('application-fields').hidden=!applicationMode;
    if($('setup-title')) $('setup-title').textContent=t(applicationMode?'applicationSetupTitle':'setupTitle');
    const setupLead=document.querySelector('[data-i18n="setupLead"]'); if(setupLead) setupLead.textContent=t(applicationMode?'applicationSetupLead':'setupLead');
    const setupHelper=document.querySelector('[data-i18n="setupHelper"]'); if(setupHelper) setupHelper.textContent=t(applicationMode?'applicationSetupHelper':'setupHelper');
    if($('begin-beginner')) $('begin-beginner').textContent=t(applicationMode?'beginApplicationAssessment':'beginAssessment');
    $$('[data-admin-mode]').forEach(button=>{ const active=button.dataset.adminMode===settings.appMode; button.classList.toggle('active',active); button.setAttribute('aria-pressed',String(active)); });
  }
  function setProductMode(mode){
    settings.appMode=mode==='application'?'application':'assessment'; saveSettings();
    if(!session||session.status==='setup'){ if(!session) newSession(); session.mode=settings.appMode; saveSession(); }
    applyProductMode(); toast(settings.appMode==='application'?'Application mode selected for the next applicant.':'Assessment mode selected for the next applicant.');
  }
  function showScreen(id){
    SCREENS.forEach(screen=>$(screen).classList.toggle('active',screen===id));
    const helpVisible=['setup-screen','profile-intro-screen','profile-screen','instructions-screen','knowledge-screen'].includes(id);
    $('help-tab').classList.toggle('visible',helpVisible);
    window.scrollTo({top:0,behavior:'smooth'}); $('app').focus({preventScroll:true});
  }
  function openModal(id){ $(id).classList.add('open'); }
  function closeModal(id){ $(id).classList.remove('open'); }
  function toast(message){ const el=$('toast'); el.textContent=message; el.classList.add('show'); clearTimeout(toast.timer); toast.timer=setTimeout(()=>el.classList.remove('show'),2300); }
  let lastRepeatableSpeech=[];
  let narrationAudio=null;
  let narrationPlayers={};
  let narrationQueue=[];
  let narrationQueueToken=0;
  function initialiseNarration(){
    narrationPlayers={
      en:new Audio('./narration-en.mp3?v=23.0.0'),
      es:new Audio('./narration-es.mp3?v=23.0.0')
    };
    Object.values(narrationPlayers).forEach(audio=>{audio.preload='auto';audio.load();});
    narrationAudio=narrationPlayers[settings.lang];
  }
  function speechSegments(value){
    return (Array.isArray(value)?value:[value]).map(item=>String(item||'').trim()).filter(Boolean);
  }
  function narrationSource(text,language){
    return globalThis.DANCO_NARRATION?.[language]?.[text]||'';
  }
  function playNarrationSegment(token,index){
    if(token!==narrationQueueToken||index>=narrationQueue.length) return;
    const clip=narrationSource(narrationQueue[index],settings.lang);
    const audio=narrationPlayers[settings.lang];
    if(!clip||!audio){
      if(index+1<narrationQueue.length) playNarrationSegment(token,index+1);
      else toast(t('narrationUnavailable'));
      return;
    }
    if(narrationAudio&&narrationAudio!==audio) narrationAudio.pause();
    narrationAudio=audio;
    const finish=()=>{
      if(token!==narrationQueueToken) return;
      audio.pause(); audio.ontimeupdate=null; audio.onended=null;
      playNarrationSegment(token,index+1);
    };
    const begin=()=>{
      if(token!==narrationQueueToken) return;
      audio.onloadedmetadata=null;
      try{audio.currentTime=Number(clip.start)||0;}catch(_){setTimeout(begin,60);return;}
      audio.ontimeupdate=()=>{if(audio.currentTime>=Number(clip.end)-.035)finish();};
      audio.onended=finish;
      audio.onerror=()=>playNarrationSegment(token,index+1);
      const playback=audio.play();
      if(playback?.catch) playback.catch(()=>toast(t('tapRepeatAudio')));
    };
    if(audio.readyState>=1) begin(); else{audio.onloadedmetadata=begin;audio.load();}
  }
  function speak(value,options={}){
    const segments=speechSegments(value);
    if(!segments.length) return;
    if(options.remember!==false) lastRepeatableSpeech=[...segments];
    if((!settings.audio&&!options.force)||!narrationPlayers[settings.lang]) return;
    narrationQueueToken++;
    narrationQueue=[...segments];
    Object.values(narrationPlayers).forEach(audio=>audio.pause());
    playNarrationSegment(narrationQueueToken,0);
  }
  function cancelSpeech(){
    narrationQueueToken++;
    narrationQueue=[];
    Object.values(narrationPlayers).forEach(audio=>{audio.pause();audio.ontimeupdate=null;audio.onended=null;audio.onloadedmetadata=null;audio.onerror=null;});
  }
  function testNarration(){ speak(t('voiceSample'),{remember:false,force:true}); }
  function closeHelp(){ $('help-drawer').classList.remove('open'); $('help-backdrop').classList.remove('open'); $('help-drawer').setAttribute('aria-hidden','true'); }
  function openHelp(){ $('help-drawer').classList.add('open'); $('help-backdrop').classList.add('open'); $('help-drawer').setAttribute('aria-hidden','false'); speak([t('helpTitle'),t('helpDefault')],{remember:false}); }
  function repeatHelpAudio(){ speak(Array.isArray(lastRepeatableSpeech)&&lastRepeatableSpeech.length?lastRepeatableSpeech:[t('helpTitle'),t('helpDefault')],{remember:false,force:true}); }
  async function toggleAppFullscreen(forceExit=false){
    const active=document.body.classList.contains('immersive-mode');
    if(active||forceExit){
      try{if(document.fullscreenElement&&document.exitFullscreen)await document.exitFullscreen();else if(document.webkitFullscreenElement&&document.webkitExitFullscreen)document.webkitExitFullscreen();}catch(_){}
      nativeFullscreenActive=false;document.body.classList.remove('immersive-mode');toast(t('fullscreenOff'));return;
    }
    let nativeWorked=false;
    try{
      const request=document.documentElement.requestFullscreen||document.documentElement.webkitRequestFullscreen;
      if(request){await request.call(document.documentElement);nativeWorked=!!(document.fullscreenElement||document.webkitFullscreenElement);}
    }catch(_){}
    nativeFullscreenActive=nativeWorked;document.body.classList.add('immersive-mode');
    const ios=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;
    toast(!nativeWorked&&ios?t('fullscreenIos'):t('fullscreenOn'));
  }

  function applicationFromForm(){
    return {
      email:$('candidate-email')?.value.trim()||'',
      phone:$('candidate-phone')?.value.trim()||'',
      location:$('candidate-location')?.value.trim()||'',
      availability:$('candidate-availability')?.value||'',
      role:$('candidate-role')?.value||'',
      experience:$('candidate-experience')?.value||'',
      authorization:$('candidate-authorization')?.value||'',
      license:$('candidate-license')?.value||'',
      otherRoles:document.querySelector('input[name="other-roles"]:checked')?.value||'Yes'
    };
  }
  function populateApplicationForm(application={}){
    const fields={
      'candidate-email':application.email,
      'candidate-phone':application.phone,
      'candidate-location':application.location,
      'candidate-availability':application.availability,
      'candidate-role':application.role,
      'candidate-experience':application.experience,
      'candidate-authorization':application.authorization,
      'candidate-license':application.license
    };
    Object.entries(fields).forEach(([id,value])=>{ if($(id)) $(id).value=value||''; });
    const otherRoles=application.otherRoles||'Yes';
    $$('input[name="other-roles"]').forEach(input=>{input.checked=input.value===otherRoles;});
  }

  function newSession(){
    session={status:'setup',mode:settings.appMode,name:'',reference:'',application:{},applicationSubmitted:false,lang:settings.lang,audio:settings.audio,supportReason:settings.audio?normaliseSupportReason(settings.supportReason):0,profileSkipped:false,profileAnswers:[],knowledgeAnswers:Array(10).fill(0),questionOrder:shuffle(QUESTIONS.map(q=>q.id)),knowledgeIndex:0,startedAt:new Date().toISOString(),trialConsumed:false};
    saveSession();
  }
  function goToSetup(){
    if(!session || session.status==='complete') newSession();
    session.lang=settings.lang; session.audio=settings.audio;
    $('candidate-name').value=session.name||''; $('setup-error').textContent='';
    populateApplicationForm(session.application||{}); applyProductMode(); renderAudioSupportControls();
    showScreen('setup-screen'); speak(t(activeProductMode()==='application'?'applicationSetupHelper':'setupHelper'));
  }
  function beginBeginner(){
    const name=$('candidate-name').value.trim(); $('setup-error').textContent='';
    if(!name){ $('setup-error').textContent=t('requiredError'); return; }
    if(settings.audio&&!normaliseSupportReason(settings.supportReason)){ $('setup-error').textContent=t('supportReasonError'); $('support-reason-fieldset').scrollIntoView({behavior:'smooth',block:'center'}); return; }
    if(!canBegin()){ $('setup-error').textContent=trialHash()?t('usedError'):t('lockedError'); openModal('unlock-modal'); return; }
    if(!session || session.status==='complete') newSession();
    const mode=activeProductMode();
    Object.assign(session,{mode,name,reference:'',application:mode==='application'?applicationFromForm():{},lang:settings.lang,audio:settings.audio,supportReason:settings.audio?normaliseSupportReason(settings.supportReason):0,status:'profile-intro'}); saveSession();
    showScreen('profile-intro-screen'); speak([t('profileIntroTitle'),t('profileIntroOne'),t('profileIntroTwo')]);
  }

  function startProfile(){ profileIndex=session.profileAnswers?.length||0; session.status='profile'; session.profileSkipped=false; saveSession(); renderProfile(); }
  function skipProfile(){ session.profileSkipped=true; session.profileAnswers=[]; session.status='instructions'; saveSession(); showInstructions(); }
  function renderProfile(){
    if(profileIndex>=PROFILE_QUESTIONS.length){ session.status='instructions'; saveSession(); showInstructions(); return; }
    showScreen('profile-screen'); const q=PROFILE_QUESTIONS[profileIndex];
    $('profile-counter').textContent=t('profileCounter',profileIndex+1); $('profile-progress').style.width=`${(profileIndex/5)*100}%`; $('profile-question').textContent=q[settings.lang];
    profileSelectedIndex=null; $('profile-confirm').disabled=true; $('profile-confirm').blur();
    document.querySelector('#profile-screen .question-hint').textContent=t('profileHint');
    $('profile-options').innerHTML=q.options.map((o,i)=>`<button class="profile-option" type="button" data-profile-option="${i}" aria-pressed="false"><span class="option-letter">${String.fromCharCode(65+i)}</span><span>${escapeHtml(o[settings.lang])}</span></button>`).join('');
    $$('[data-profile-option]').forEach(button=>button.addEventListener('click',()=>{
      profileSelectedIndex=Number(button.dataset.profileOption);
      $$('[data-profile-option]').forEach(optionButton=>{const selected=optionButton===button;optionButton.classList.toggle('selected',selected);optionButton.setAttribute('aria-pressed',String(selected));});
      $('profile-confirm').disabled=false; document.querySelector('#profile-screen .question-hint').textContent=t('answerSelectedHint');
    }));
    speak([q[settings.lang],...q.options.map(o=>o[settings.lang])]);
  }
  function confirmProfileAnswer(){
    if(profileSelectedIndex===null) return;
    const q=PROFILE_QUESTIONS[profileIndex],option=q?.options[profileSelectedIndex]; if(!option) return;
    $('profile-confirm').disabled=true; $$('[data-profile-option]').forEach(button=>button.disabled=true);
    session.profileAnswers[profileIndex]=option.disc; profileIndex++; saveSession(); setTimeout(renderProfile,350);
  }
  function showInstructions(){ if($('accessibility-notice')) $('accessibility-notice').hidden=!accessibilitySupportActive(); showScreen('instructions-screen'); speak([t('instructionsTitle'),t('instructionsLead'),t('timingNotice')]); }

  function shuffle(array){ const out=[...array]; for(let i=out.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [out[i],out[j]]=[out[j],out[i]]; } return out; }
  function seededOptions(q){
    const base=q.options.map((option,index)=>({option,index})); let seed=((session?.seed||Date.now())+q.id*2654435761)>>>0;
    if(!session.seed){ session.seed=seed; saveSession(); }
    for(let i=base.length-1;i>0;i--){ seed=(Math.imul(seed,1664525)+1013904223)>>>0; const j=seed%(i+1); [base[i],base[j]]=[base[j],base[i]]; }
    return base;
  }
  function currentQuestion(){ const id=session.questionOrder[session.knowledgeIndex]; return QUESTIONS.find(q=>q.id===id); }
  function questionReviewSeconds(q){ return q.read+(settings.audio?4:0)+(accessibilitySupportActive()?4:0); }
  function questionAnswerSeconds(q){ return q.answer+(settings.audio?12:0)+(accessibilitySupportActive()?15:0); }
  function startKnowledge(){
    if(!canBegin() && !session?.trialConsumed){ openModal('unlock-modal'); return; }
    session.status='knowledge'; session.knowledgeIndex=Number(session.knowledgeIndex||0); session.knowledgeAnswers=session.knowledgeAnswers||Array(10).fill(0); saveSession(); renderKnowledgeQuestion();
  }
  function renderKnowledgeQuestion(){
    clearInterval(timer); optionLocked=false; knowledgeSelectedIndex=null;
    if(session.knowledgeIndex>=QUESTIONS.length){ completeAssessment(); return; }
    showScreen('knowledge-screen'); const q=currentQuestion(); currentDisplayOptions=seededOptions(q);
    $('knowledge-counter').textContent=t('knowledgeCounter',session.knowledgeIndex+1); $('knowledge-tier').textContent=t('tiers')[q.tier]; $('knowledge-progress').style.width=`${(session.knowledgeIndex/10)*100}%`;
    $('knowledge-category').textContent=t('categories')[q.cat]; $('knowledge-question').textContent=q[settings.lang]; $('knowledge-hint').textContent=t('reviewHint');
    $('knowledge-options').innerHTML=currentDisplayOptions.map(({option,index},displayIndex)=>{
      const visual=!!option.img; const copy=q.hideText?'':`<span class="answer-copy"><span class="option-letter">${String.fromCharCode(65+displayIndex)}</span><span>${escapeHtml(option[settings.lang])}</span></span>`;
      const accessibleLabel=q.hideText?`${settings.lang==='es'?'Opción':'Option'} ${String.fromCharCode(65+displayIndex)}`:option[settings.lang];
      return `<button class="knowledge-option ${visual?'visual':'text-only'}" type="button" data-answer-index="${index}" aria-label="${escapeHtml(accessibleLabel)}" aria-pressed="false" disabled>${visual?`<img src="${option.img}" alt="" draggable="false">`:''}${copy||`<span class="answer-copy"><span class="option-letter">${String.fromCharCode(65+displayIndex)}</span></span>`}</button>`;
    }).join('');
    $('knowledge-repeat').hidden=!accessibilitySupportActive();
    $('knowledge-confirm').disabled=true;
    $$('[data-answer-index]').forEach(button=>button.addEventListener('click',()=>selectKnowledgeAnswer(button)));
    startPhase('review',questionReviewSeconds(q)); speak(q[settings.lang]);
  }
  function startPhase(nextPhase, seconds){
    clearInterval(timer); phase=nextPhase; phaseRemaining=seconds; updateTimer();
    if(phase==='answer'){
      $('phase-label').textContent=t('answer'); $('.phase-display'); $('timer-display').parentElement.classList.add('answer'); $('knowledge-hint').textContent=t('answerHint');
      $$('[data-answer-index]').forEach(button=>button.disabled=false);
      $('knowledge-confirm').disabled=knowledgeSelectedIndex===null;
      const q=currentQuestion(); if(settings.audio) speak(q.hideText?q[settings.lang]:[q[settings.lang],...currentDisplayOptions.map(({option})=>option[settings.lang])]);
    }else{
      $('phase-label').textContent=t('review'); $('timer-display').parentElement.classList.remove('answer');
    }
    timer=setInterval(()=>{ phaseRemaining--; updateTimer(); if(phaseRemaining<=0){ clearInterval(timer); if(phase==='review') startPhase('answer',questionAnswerSeconds(currentQuestion())); else timeOutQuestion(); } },1000);
  }
  function updateTimer(){ $('timer-display').textContent=String(Math.max(0,phaseRemaining)).padStart(2,'0'); }
  function repeatCurrentQuestion(){
    const q=currentQuestion(); if(!q) return;
    speak(q.hideText?q[settings.lang]:[q[settings.lang],...currentDisplayOptions.map(({option})=>option[settings.lang])],{force:true});
  }
  function selectKnowledgeAnswer(button){
    if(optionLocked || phase!=='answer') return;
    knowledgeSelectedIndex=Number(button.dataset.answerIndex);
    $$('[data-answer-index]').forEach(optionButton=>{const selected=optionButton===button;optionButton.classList.toggle('selected',selected);optionButton.setAttribute('aria-pressed',String(selected));});
    $('knowledge-confirm').disabled=false; $('knowledge-hint').textContent=t('answerSelectedHint');
  }
  function confirmKnowledgeAnswer(){
    if(optionLocked||phase!=='answer'||knowledgeSelectedIndex===null) return;
    optionLocked=true; clearInterval(timer); $('knowledge-confirm').disabled=true; $$('[data-answer-index]').forEach(button=>button.disabled=true);
    const q=currentQuestion(); session.knowledgeAnswers[q.id-1]=knowledgeSelectedIndex+1; saveSession(); setTimeout(advanceKnowledge,650);
  }
  function timeOutQuestion(){ if(optionLocked) return; optionLocked=true; $('knowledge-confirm').disabled=true; const q=currentQuestion(); session.knowledgeAnswers[q.id-1]=0; saveSession(); toast(t('timedOut')); setTimeout(advanceKnowledge,850); }
  function advanceKnowledge(){ session.knowledgeIndex++; saveSession(); renderKnowledgeQuestion(); }

  function completeAssessment(){
    clearInterval(timer); if(session.status!=='complete'){
      session.status='complete'; session.completedAt=new Date().toISOString(); session.lang=settings.lang; session.audio=settings.audio; session.supportReason=settings.audio?normaliseSupportReason(settings.supportReason):0; consumeTrialCompletion(); session.resultCode=encodeResult(session); saveSession(); applyAccessState();
    }
    renderResult();
  }
  function renderResult(){
    if(!session?.resultCode) return;
    const applicationMode=session.mode==='application';
    const submitted=!!session.applicationSubmitted;
    const resultCard=$('result-title').closest('.result-card');
    resultCard.querySelector('[data-i18n="completeEyebrow"]').textContent=t(applicationMode?'applicationCompleteEyebrow':'completeEyebrow');
    $('result-title').textContent=t(applicationMode?(submitted?'applicationSubmittedTitle':'applicationCompleteTitle'):'completeTitle');
    resultCard.querySelector('[data-i18n="completeLead"]').textContent=t(applicationMode?(submitted?'applicationSubmittedLead':'applicationCompleteLead'):'completeLead');
    $('result-code-label').textContent=t(applicationMode?'applicationNumberLabel':'resultCodeLabel');
    $('copy-code').textContent=t(applicationMode?'copyApplicationNumber':'copyCode');
    resultCard.querySelector('[data-i18n="resultInstruction"]').textContent=t(applicationMode?(submitted?'applicationSubmittedInstruction':'applicationResultInstruction'):'resultInstruction');
    $('result-code').textContent=applicationMode?(session.submissionReference||t('applicationReferencePending')):session.resultCode;
    $('copy-code').hidden=applicationMode&&!session.submissionReference;
    $('completion-meta').innerHTML=`<b>${escapeHtml(session.name)}</b><br>${escapeHtml(session.profileSkipped?t('profileSkipped'):t('profileDone'))}${session.submissionReference?`<br>${escapeHtml(session.submissionReference)}`:''}`;
    const applicationSummary=$('application-result-summary');
    applicationSummary.hidden=!applicationMode;
    applicationSummary.innerHTML=applicationMode?`<div><span>${escapeHtml(t('appliedPositionLabel'))}</span><b>${escapeHtml(session.application?.role||t('notSpecified'))}</b></div><div><span>${escapeHtml(t('otherPositionsLabel'))}</span><b>${escapeHtml(session.application?.otherRoles==='Yes'?t('yesLabel'):session.application?.otherRoles==='No'?t('noLabel'):t('notSpecified'))}</b></div>`:'';
    $('submit-application').textContent=t(applicationMode?'submitApplication':'submitAssessment');
    $('submit-application').hidden=submitted;
    $('application-submit-note').hidden=submitted;
    $('next-applicant').style.display=(isOwner()||trialRemaining()>0)?'inline-flex':'none';
    showScreen('result-screen'); speak([t(applicationMode?(submitted?'applicationSubmittedTitle':'applicationCompleteTitle'):'completeTitle'),t(applicationMode?(submitted?'applicationSubmittedInstruction':'applicationResultInstruction'):'resultInstruction')]);
  }

  function findStoredApplication(code){
    const normalized=normalizeCode(code);
    return storedApplications().find(item=>normalizeCode(item.code)===normalized)||null;
  }
  async function populateStoredApplicants(){
    const select=$('stored-applicant-select'); if(!select) return;
    select.disabled=true; select.innerHTML='<option value="">Loading shared submissions…</option>';
    if(!adminAccessPin){ select.innerHTML='<option value="">Administrator access required</option>'; return; }
    try{
      const statuses=['pending','actioned','archived'];
      const responses=await Promise.all(statuses.map(status=>sharedRequest('/api/admin',{action:'list',status,adminPin:adminAccessPin})));
      const grouped=Object.fromEntries(statuses.map((status,index)=>[status,Array.isArray(responses[index].submissions)?responses[index].submissions:[]]));
      $$('[data-queue-status]').forEach(button=>{const status=button.dataset.queueStatus;button.classList.toggle('active',status===currentQueueStatus);const count=button.querySelector('[data-queue-count]');if(count)count.textContent=String(grouped[status]?.length||0);});
      sharedQueueRecords=grouped[currentQueueStatus]||[];
      select.innerHTML=sharedQueueRecords.length?'<option value="">Select a shared submission</option>':'<option value="">No submissions in this queue</option>';
      sharedQueueRecords.forEach(item=>{const option=document.createElement('option');option.value=`remote:${item.reference}`;const kind=item.recordType==='application'?'Application':'Assessment';const role=item.role?` · ${item.role}`:'';option.textContent=`${item.name||'Unnamed applicant'} — ${item.reference} · ${kind}${role}`;select.appendChild(option);});
      $('shared-service-status').textContent='Live shared list · available on every authorised device';
      select.disabled=false;
    }catch(error){
      const local=storedApplications().filter(item=>(item.queueStatus||'pending')===currentQueueStatus).sort((a,b)=>String(b.submittedAt).localeCompare(String(a.submittedAt)));
      select.innerHTML=local.length?'<option value="">Shared service unavailable — local copies</option>':'<option value="">Shared service unavailable</option>';
      local.forEach(item=>{const option=document.createElement('option');option.value=`local:${item.code}`;option.textContent=`${item.name||'Unnamed applicant'} — local copy`;select.appendChild(option);});
      $('shared-service-status').textContent=error.message;
      select.disabled=false;
    }
  }
  async function storeCurrentApplication(){
    $('submit-error').textContent='';
    const pin=$('submit-pin').value.trim();
    if(accessHash(pin)!==ADMIN_HASH){ $('submit-error').textContent=t('invalidAdminPin'); return; }
    if(!session||session.status!=='complete'||!session.resultCode){ $('submit-error').textContent='No completed result is available to submit.'; return; }
    const button=$('confirm-submit'); button.disabled=true; button.textContent=settings.lang==='es'?'Enviando…':'Submitting…';
    const assessment={knowledgeAnswers:[...(session.knowledgeAnswers||[])],profileSkipped:!!session.profileSkipped,profileAnswers:[...(session.profileAnswers||[])],lang:session.lang,audio:!!session.audio,supportReason:normaliseSupportReason(session.supportReason)};
    const record={recordType:session.mode==='application'?'application':'assessment',resultCode:session.resultCode,name:session.name,application:session.mode==='application'?{...(session.application||{})}:{},assessment};
    try{
      const response=await sharedRequest('/api/submissions',{adminPin:pin,record});
      const saved=response.submission||{}; if(!saved.reference)throw new Error(t('submissionFailed'));
      const submittedAt=saved.submittedAt||new Date().toISOString();
      const applications=storedApplications();
      const localRecord={code:session.resultCode,reference:saved.reference,recordType:record.recordType,queueStatus:'pending',name:session.name,application:record.application,assessment,submittedAt};
      const existing=applications.findIndex(item=>normalizeCode(item.code)===normalizeCode(localRecord.code));
      if(existing>=0)applications[existing]=localRecord;else applications.unshift(localRecord);
      saveJson(APPLICATIONS_KEY,applications.slice(0,100));
      session.applicationSubmitted=true; session.submissionReference=saved.reference; session.submittedAt=submittedAt; saveSession();
      $('submit-pin').value=''; closeModal('submit-modal'); renderResult(); if(adminAuthenticated)populateStoredApplicants(); toast(existing>=0?t('submissionAlreadySaved'):t('submissionSaved'));
    }catch(error){ $('submit-error').textContent=error.message||t('submissionFailed'); }
    finally{button.disabled=false;button.textContent=t('confirmSubmit');}
  }
  async function loadStoredApplicant(){
    const selected=$('stored-applicant-select').value;
    if(!selected){ $('decode-error').textContent='Select a submission first.'; return; }
    try{
      let record;
      if(selected.startsWith('remote:')){const reference=selected.slice(7);const response=await sharedRequest('/api/admin',{action:'get',reference,adminPin:adminAccessPin});record=response.submission;currentSharedReference=reference;$('submission-status-actions').hidden=false;}
      else{record=findStoredApplication(selected.slice(6));currentSharedReference='';$('submission-status-actions').hidden=true;}
      if(!record)throw new Error('Submission was not found.');
      const data=record.assessment?.knowledgeAnswers?record.assessment:decodeResult(record.resultCode||record.code); $('decode-error').textContent='';
      $('admin-result-code').value=''; $('admin-candidate-name').value=record.name||''; $('admin-candidate-reference').value=record.reference||'';
      renderDashboard(data,{code:'',name:record.name,reference:record.reference||record.code,application:record.recordType==='assessment'?null:(record.application||null),submittedAt:record.submittedAt});
    }catch(error){ $('decode-error').textContent=error.message; $('dashboard-output').innerHTML=''; }
  }
  async function updateSharedStatus(status){
    if(!currentSharedReference)return;
    try{
      await sharedRequest('/api/admin',{action:'status',reference:currentSharedReference,status,adminPin:adminAccessPin});
      currentSharedReference='';$('submission-status-actions').hidden=true;$('dashboard-output').innerHTML='';await populateStoredApplicants();toast(`Submission moved to ${status}.`);
    }catch(error){$('decode-error').textContent=error.message;}
  }

  function pushBits(bits,value,count){ for(let i=count-1;i>=0;i--) bits.push((value>>i)&1); }
  function readBits(bits,start,count){ let value=0; for(let i=0;i<count;i++) value=(value<<1)|(bits[start+i]||0); return value; }
  function bitsToBytes(bits){ const copy=[...bits]; while(copy.length%8) copy.push(0); const out=[]; for(let i=0;i<copy.length;i+=8) out.push(readBits(copy,i,8)); return out; }
  function bytesToBits(bytes){ const bits=[]; bytes.forEach(byte=>pushBits(bits,byte,8)); return bits; }
  function checksum(bits){ let h=0xA7; bits.forEach((bit,i)=>{ h=((h<<1)|(h>>7))&255; h^=bit?0x5D:0xB7; h=(h+i*13+29)&255; }); return h; }
  function base32Encode(bytes){ let bits=0,value=0,out=''; for(const byte of bytes){ value=(value<<8)|byte; bits+=8; while(bits>=5){ out+=CODE_ALPHABET[(value>>(bits-5))&31]; bits-=5; } } if(bits>0) out+=CODE_ALPHABET[(value<<(5-bits))&31]; return out; }
  function base32Decode(value){ let bits=0,buffer=0,out=[]; for(const char of value){ const index=CODE_ALPHABET.indexOf(char); if(index<0) throw new Error('Result code contains an invalid character.'); buffer=(buffer<<5)|index; bits+=5; if(bits>=8){ out.push((buffer>>(bits-8))&255); bits-=8; } } return out; }
  function randomByte(){ try{ const a=new Uint8Array(1); crypto.getRandomValues(a); return a[0]; }catch(_){ return Math.floor(Math.random()*256); } }
  function formatResultCode(raw){ return `DRA-${raw.match(/.{1,4}/g).join('-')}`; }
  function encodeResult(data){
    const bits=[]; pushBits(bits,VERSION,4); pushBits(bits,randomByte(),8);
    for(let i=0;i<10;i++) pushBits(bits,Number(data.knowledgeAnswers[i]||0),3);
    pushBits(bits,data.profileSkipped?0:1,1);
    for(let i=0;i<5;i++) pushBits(bits,data.profileSkipped?0:(DISC_INDEX[data.profileAnswers[i]]||0),3);
    pushBits(bits,data.lang==='es'?1:0,1); pushBits(bits,data.audio?1:0,1); pushBits(bits,Number(data.supportReason||0)&3,2);
    pushBits(bits,checksum(bits),8); const bytes=bitsToBytes(bits).map((b,i)=>b^XOR_STREAM[i]); return formatResultCode(base32Encode(bytes));
  }
  function decodeResult(code){
    const raw=String(code||'').toUpperCase().replace(/^\s*DRA[-\s]*/,'').replace(/[^A-Z2-9]/g,''); if(raw.length!==15) throw new Error('Result code is incomplete or from an unsupported version.');
    let bytes=base32Decode(raw); if(bytes.length<9) throw new Error('Result code is incomplete.'); bytes=bytes.slice(0,9).map((b,i)=>b^XOR_STREAM[i]); const bits=bytesToBits(bytes); let p=0;
    const version=readBits(bits,p,4);p+=4;if(version!==VERSION)throw new Error('This result code was created by a different assessment version.'); p+=8;
    const knowledgeAnswers=[];for(let i=0;i<10;i++){knowledgeAnswers.push(readBits(bits,p,3));p+=3;}
    const profileCompleted=readBits(bits,p,1)===1;p+=1;const profileAnswers=[];for(let i=0;i<5;i++){profileAnswers.push(DISC_CODE[readBits(bits,p,3)]||'');p+=3;}
    const lang=readBits(bits,p,1)?'es':'en';p+=1;const audio=readBits(bits,p,1)===1;p+=1;const supportReason=readBits(bits,p,2);p+=2;const expected=checksum(bits.slice(0,p));const received=readBits(bits,p,8);
    if(expected!==received)throw new Error('Result code is invalid or has been mistyped.');
    if(knowledgeAnswers.some(value=>value<0||value>4))throw new Error('Result code contains invalid answer data.');
    return {knowledgeAnswers,profileSkipped:!profileCompleted,profileAnswers,lang,audio,supportReason};
  }

  function scoreAssessment(answers){
    const tiers={foundation:[0,0],roofer:[0,0],foreman:[0,0]},cats={materials:[0,0],installation:[0,0],service:[0,0],safety:[0,0],supervision:[0,0]}; let correct=0,criticalWrong=0,timeouts=0;
    const breakdown=QUESTIONS.map(q=>{ const answer=Number(answers[q.id-1]||0); const ok=answer===q.correct+1; tiers[q.tier][1]++;cats[q.cat][1]++; if(ok){correct++;tiers[q.tier][0]++;cats[q.cat][0]++;}else{if(q.critical)criticalWrong++;if(!answer)timeouts++;} return {q,answer,ok}; });
    const pct=pair=>pair[1]?Math.round(pair[0]/pair[1]*100):0; const tierPct=Object.fromEntries(Object.entries(tiers).map(([k,v])=>[k,pct(v)])); const catPct=Object.fromEntries(Object.entries(cats).map(([k,v])=>[k,pct(v)])); const overall=correct*10;
    const safety=catPct.safety;
    let recommendation='Service Helper interview track', rationale='Best aligned to an entry pathway with structured onboarding and practical coaching.';
    if(overall>=80&&tiers.foundation[0]>=2&&tiers.roofer[0]>=3&&tiers.foreman[0]>=2&&criticalWrong===0){recommendation='Foreman interview track';rationale='Strong progressive evidence across foundation, practical roofing and supervisory decision-making, with both critical safety responses correct.';}
    else if(overall>=60&&tiers.foundation[0]>=2&&tiers.roofer[0]>=2&&criticalWrong<=1){recommendation='Roofer interview track';rationale='Sufficient foundation and practical roofing evidence for a roofer-focused interview, with any gaps suitable for verification or coaching.';}
    const roles={
      'Service Helper':Math.round(.65*tierPct.foundation+.35*overall),
      'Roofer':Math.max(0,Math.round(.25*tierPct.foundation+.6*tierPct.roofer+.15*safety)-(criticalWrong?8:0)),
      'Foreman':Math.max(0,Math.round(.15*tierPct.foundation+.3*tierPct.roofer+.4*tierPct.foreman+.15*safety)-(criticalWrong*12))
    };
    return {correct,overall,tierPct,catPct,criticalWrong,timeouts,recommendation,rationale,roles,breakdown};
  }
  function personalityResult(data){
    if(data.profileSkipped) return null; const counts={D:0,I:0,S:0,C:0}; data.profileAnswers.forEach(code=>{if(counts[code]!==undefined)counts[code]++;});
    const ordered=Object.entries(counts).sort((a,b)=>b[1]-a[1]); const main=ordered[0][0],second=ordered[1][0],blend=ordered[0][1]-ordered[1][1]<=1; const codes=blend?[main,second]:[main];
    const info={D:{name:'Red · Direct',color:'#d9474f',guidance:'Be concise, lead with the goal and key action, offer practical choices, and give room for ownership.'},I:{name:'Yellow · Interactive',color:'#e7ad20',guidance:'Use a friendly conversational approach, invite ideas, acknowledge enthusiasm, and confirm the agreed next step.'},S:{name:'Green · Supportive',color:'#2a9a68',guidance:'Use a calm, considerate pace, explain changes early, provide reassurance, and allow time for questions.'},C:{name:'Blue · Considered',color:'#2473cf',guidance:'Provide accurate detail, clear standards and organised instructions, and allow time to check or clarify information.'}};
    const label=codes.map(code=>info[code].name).join(' / '); const guidance=codes.map(code=>info[code].guidance).join(' '); const color=codes.length>1?`linear-gradient(135deg,${info[codes[0]].color},${info[codes[1]].color})`:info[main].color;
    return {short:codes.join('/'),label,guidance,color,counts};
  }
  function answerText(q,value,lang='en'){ return value? q.options[value-1]?.[lang] || 'Invalid answer' : 'Timed out / no answer'; }
  function renderDashboard(data,{demo=false,name='',reference='',code='',application=null,submittedAt=''}={}){
    const result=scoreAssessment(data.knowledgeAnswers),disc=personalityResult(data); const language=data.lang==='es'?'Spanish':'English'; const supportInfo=supportReportInfo(data);
    const applicantMeta=[reference,language,supportInfo.label,code].filter(Boolean).map(escapeHtml).join(' · ');
    const applicationFields=application?[
      ['Position applied for',application.role],['Open to other roles',application.otherRoles],['Email',application.email],['Phone',application.phone],
      ['City and state',application.location],['Available start date',application.availability],['Commercial roofing experience',application.experience],
      ['U.S. work authorization',application.authorization],['Valid driver’s license',application.license]
    ]:[];
    $('dashboard-output').innerHTML=`
      ${demo?'<div class="dashboard-banner">Example report only — these results do not belong to an applicant.</div>':''}
      ${application?`<section class="application-details-card"><div class="application-details-heading"><div><small>JOB APPLICANT</small><h3>${escapeHtml(name||'Applicant name not supplied')}</h3></div><span>${escapeHtml(reference||'')}</span></div><div class="application-details-grid">${applicationFields.map(([label,value])=>`<div><span>${escapeHtml(label)}</span><b>${escapeHtml(value||'Not supplied')}</b></div>`).join('')}</div>${submittedAt?`<p class="application-stored-at">Submitted to shared review: ${escapeHtml(new Intl.DateTimeFormat('en-US',{dateStyle:'medium',timeStyle:'short'}).format(new Date(submittedAt)))}</p>`:''}</section>`:''}
      <div class="dashboard-summary">
        <div class="score-ring" style="--score:${result.overall}%"><div><b>${result.overall}%</b><span>KNOWLEDGE SCORE</span></div></div>
        <div class="recommendation-card"><small>RECOMMENDED INTERVIEW PATH</small><h3>${escapeHtml(result.recommendation)}</h3><p>${escapeHtml(result.rationale)}</p></div>
      </div>
      <div class="metric-grid">
        <div class="metric-card"><b>${result.correct}/10</b><span>Correct responses</span></div>
        <div class="metric-card"><b>${result.criticalWrong}</b><span>Critical safety gaps</span></div>
        <div class="metric-card"><b>${result.timeouts}</b><span>Timed out / unanswered</span></div>
      </div>
      <div class="metric-card"><b>${escapeHtml(name||'Applicant name not supplied')}</b><span>${applicantMeta}</span></div>
      ${data.audio?`<div class="accessibility-report-card"><span>ACCESSIBILITY &amp; AUDIO SUPPORT</span><b>${escapeHtml(supportInfo.label)}</b><p>${escapeHtml(supportInfo.detail)}</p></div>`:''}
      <h3>Role-alignment indicators</h3>
      <div class="bar-list">${Object.entries(result.roles).map(([label,value])=>`<div class="bar-row"><span>${label}</span><div class="bar"><i style="width:${value}%"></i></div><b>${value}%</b></div>`).join('')}</div>
      <h3>Progressive assessment tiers</h3>
      <div class="bar-list">${Object.entries(result.tierPct).map(([key,value])=>`<div class="bar-row"><span>${TEXT.en.tiers[key]}</span><div class="bar"><i style="width:${value}%"></i></div><b>${value}%</b></div>`).join('')}</div>
      ${disc?`<div class="disc-card"><div class="disc-swatch" style="background:${disc.color}">${disc.short}</div><div><h3>Estimated engagement profile: ${escapeHtml(disc.label)}</h3><p>${escapeHtml(disc.guidance)}</p><p class="fine">Advisory estimate from five friendly preference questions; it is not a diagnostic personality test and should not be used as a pass/fail criterion.</p></div></div>`:'<div class="disc-card"><div class="disc-swatch" style="background:#718198">—</div><div><h3>Work-style primer not completed</h3><p>The applicant chose to skip the optional questions. No profile inference has been made.</p></div></div>'}
      <h3 class="breakdown-title">Question breakdown</h3>
      <table class="breakdown-table"><thead><tr><th>#</th><th>Tier</th><th>Question</th><th>Applicant response</th><th>Outcome</th></tr></thead><tbody>${result.breakdown.map(({q,answer,ok})=>`<tr><td>${q.id}</td><td>${TEXT.en.tiers[q.tier]}${q.critical?' · Critical':''}</td><td>${escapeHtml(q.en)}</td><td>${escapeHtml(answerText(q,answer,'en'))}</td><td class="${ok?'result-good':'result-bad'}">${ok?'Correct':answer?'Incorrect':'Timed out'}</td></tr>`).join('')}</tbody></table>`;
  }

  function initEvents(){
    $$('[data-language]').forEach(button=>button.addEventListener('click',()=>{setLanguage(button.dataset.language);goToSetup();}));
    $$('[data-action="open-unlock"]').forEach(button=>button.addEventListener('click',()=>openModal('unlock-modal')));
    $$('[data-action="close-unlock"]').forEach(button=>button.addEventListener('click',()=>closeModal('unlock-modal')));
    $$('[data-action="close-admin"]').forEach(button=>button.addEventListener('click',()=>closeModal('admin-modal')));
    $$('[data-action="close-submit"]').forEach(button=>button.addEventListener('click',()=>closeModal('submit-modal')));
    $$('[data-action="close-help"]').forEach(button=>button.addEventListener('click',closeHelp));
    document.querySelector('[data-action="repeat-audio"]').addEventListener('click',repeatHelpAudio);
    document.querySelector('[data-action="test-narration"]').addEventListener('click',testNarration);
    document.querySelector('.brand-button').addEventListener('click',()=>{if(session?.status==='complete')renderResult();else showScreen('language-screen');});
    $('help-tab').addEventListener('click',openHelp); $('help-backdrop').addEventListener('click',closeHelp);
    $('language-toggle').addEventListener('click',()=>setLanguage(settings.lang==='en'?'es':'en'));
    $('audio-toggle').addEventListener('click',()=>setAudioSupport(!settings.audio));
    $('fullscreen-toggle').addEventListener('click',()=>toggleAppFullscreen());
    $('immersive-exit').addEventListener('click',()=>toggleAppFullscreen(true));
    document.addEventListener('fullscreenchange',()=>{if(nativeFullscreenActive&&!document.fullscreenElement){nativeFullscreenActive=false;document.body.classList.remove('immersive-mode');}});
    document.addEventListener('webkitfullscreenchange',()=>{if(nativeFullscreenActive&&!document.webkitFullscreenElement){nativeFullscreenActive=false;document.body.classList.remove('immersive-mode');}});
    $$('.setup-choice').forEach(button=>button.addEventListener('click',()=>setAudioSupport(button.dataset.audio==='on',{askReason:button.dataset.audio==='on'})));
    $$('[data-support-reason]').forEach(button=>button.addEventListener('click',()=>selectAudioSupportReason(button.dataset.supportReason)));
    $('begin-beginner').addEventListener('click',beginBeginner); $('start-profile').addEventListener('click',startProfile); $('skip-profile').addEventListener('click',skipProfile); $('profile-confirm').addEventListener('click',confirmProfileAnswer); $('start-knowledge').addEventListener('click',startKnowledge); $('knowledge-repeat').addEventListener('click',repeatCurrentQuestion); $('knowledge-confirm').addEventListener('click',confirmKnowledgeAnswer);
    $('unlock-submit').addEventListener('click',()=>{ $('unlock-error').textContent=''; try{const result=activateCode($('unlock-code').value);if(result.mode==='owner')toast(t('ownerSuccess'));else{if(result.remaining<=0)throw new Error(t('usedError'));toast(t('unlockSuccess',result.remaining));} $('unlock-code').value='';closeModal('unlock-modal');}catch(error){$('unlock-error').textContent=error.message;} });
    $('copy-code').addEventListener('click',async()=>{try{const value=session.mode==='application'?(session.submissionReference||''):session.resultCode;if(!value)return;await navigator.clipboard.writeText(value);toast(t('copied'));}catch(_){toast(t('copyFailed'));}});
    $('submit-application').addEventListener('click',()=>{$('submit-error').textContent='';$('submit-pin').value='';openModal('submit-modal');setTimeout(()=>$('submit-pin').focus(),80);});
    $('confirm-submit').addEventListener('click',storeCurrentApplication);
    $('next-applicant').addEventListener('click',()=>{if(!isOwner()&&trialRemaining()<=0){openModal('unlock-modal');return;}localStorage.removeItem(SESSION_KEY);session=null;newSession();goToSetup();});
    $('admin-open').addEventListener('click',()=>{openModal('admin-modal');$('admin-login').hidden=adminAuthenticated;$('admin-dashboard').hidden=!adminAuthenticated;if(!adminAuthenticated)setTimeout(()=>$('admin-pin').focus(),80);else prepareAdmin();});
    $('admin-login-button').addEventListener('click',()=>{const pin=$('admin-pin').value.trim();if(accessHash(pin)!==ADMIN_HASH){$('admin-error').textContent='Administrator PIN not recognised.';return;}adminAuthenticated=true;adminAccessPin=pin;$('admin-error').textContent='';$('admin-pin').value='';$('admin-login').hidden=true;$('admin-dashboard').hidden=false;prepareAdmin();});
    $('decode-result').addEventListener('click',()=>{try{const code=$('admin-result-code').value;const data=decodeResult(code);const stored=findStoredApplication(code);$('decode-error').textContent='';renderDashboard(data,{code:formatResultCode(normalizeCode(code).replace(/^DRA/,'')),name:$('admin-candidate-name').value.trim()||stored?.name||'',reference:$('admin-candidate-reference').value.trim()||stored?.code||'',application:stored?.application||null,submittedAt:stored?.submittedAt||''});}catch(error){$('decode-error').textContent=error.message;$('dashboard-output').innerHTML='';}});
    $$('[data-admin-mode]').forEach(button=>button.addEventListener('click',()=>setProductMode(button.dataset.adminMode)));
    $$('[data-queue-status]').forEach(button=>button.addEventListener('click',()=>{currentQueueStatus=button.dataset.queueStatus;currentSharedReference='';$('submission-status-actions').hidden=true;$('dashboard-output').innerHTML='';populateStoredApplicants();}));
    $$('[data-set-submission-status]').forEach(button=>button.addEventListener('click',()=>updateSharedStatus(button.dataset.setSubmissionStatus)));
    $('load-stored-applicant').addEventListener('click',loadStoredApplicant);
    $('load-example').addEventListener('click',()=>{const demo={knowledgeAnswers:[1,1,1,1,1,1,2,1,1,1],profileSkipped:false,profileAnswers:['S','C','S','I','S'],lang:'en',audio:false};renderDashboard(demo,{demo:true,name:'Example Applicant',reference:'DEMO-001'});});
    $('print-report').addEventListener('click',()=>window.print());
    $('reset-device').addEventListener('click',()=>{if(!confirm('Reset the current applicant on this device? Access status and remaining trial runs will be preserved.'))return;clearInterval(timer);localStorage.removeItem(SESSION_KEY);session=null;$('dashboard-output').innerHTML='';closeModal('admin-modal');newSession();showScreen('language-screen');toast('Applicant reset.');});
    [$('unlock-modal'),$('admin-modal'),$('submit-modal')].forEach(modal=>modal.addEventListener('click',event=>{if(event.target===modal)modal.classList.remove('open');}));
    document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeModal('unlock-modal');closeModal('admin-modal');closeModal('submit-modal');closeHelp();}});
  }
  function prepareAdmin(){
    $('print-date').textContent=new Intl.DateTimeFormat('en-GB',{dateStyle:'long',timeStyle:'short'}).format(new Date());
    populateStoredApplicants(); applyProductMode();
    if(session?.status==='complete'){$('admin-result-code').value=session.resultCode||'';$('admin-candidate-name').value=session.name||'';$('admin-candidate-reference').value=session.submissionReference||session.reference||'';try{renderDashboard(decodeResult(session.resultCode),{code:session.mode==='application'?'':session.resultCode,name:session.name,reference:session.submissionReference||session.reference,application:session.mode==='application'?(session.application||{}):null,submittedAt:session.submittedAt||''});}catch(_){}}
  }
  function init(){
    if(session&&!session.mode){session.mode='assessment';saveSession();}
    initialiseNarration(); setLanguage(settings.lang); $('audio-toggle').textContent=settings.audio?'🔊':'🔇'; applyAccessState(); initEvents(); applyProductMode();
    if(session?.status==='complete'&&session.resultCode){settings.lang=session.lang||settings.lang;setLanguage(settings.lang);renderResult();}
    else if(session?.status==='knowledge'){settings.lang=session.lang||settings.lang;setLanguage(settings.lang);showInstructions();$('start-knowledge').textContent=t('resume');}
    else if(session?.status==='profile'){settings.lang=session.lang||settings.lang;setLanguage(settings.lang);profileIndex=session.profileAnswers?.length||0;renderProfile();}
    else if(session?.status==='profile-intro'){settings.lang=session.lang||settings.lang;setLanguage(settings.lang);showScreen('profile-intro-screen');}
    else showScreen('language-screen');
    if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js?v=23.0.0').catch(()=>{}));
  }

  document.addEventListener('DOMContentLoaded',init);
})();
