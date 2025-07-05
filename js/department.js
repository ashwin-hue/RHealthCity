const deptOverlay = document.getElementById('deptOverlay');
const closeBtn = document.getElementById('closeBtn');

const contentMap = {
  anatomy: {
    mainHeader: "Department of Anatomy",
    subHead1: { text: "About Anatomy", show: true },
    para1: { text: "The Department of Anatomy at Rajalakshmi Health City was established in the Year since 2021. The Department of Anatomy is functioning in two wings on the Ground floor. Learning anatomy is an essential part of Health Science Education. \n \n The Department Excel in providing quality medical education and enable students to face competition and also provide high-quality teaching to medical students. \n \n To provide an opportunity for medical undergraduates students to learn Gross Anatomy, Comparative anatomy, Microscopic Anatomy, and Developmental Anatomy, genetics.", show: true },
    subHead2: { text: "Dissection Hall", show: true },
    para2: { text: "A very spacious and well-ventilated dissection hall has an infrastructure of 325 Sq.m with a capacity of 150 students. The Department has the capacity to provide 10 Cadavers for dissection and demonstration for 150 students. Complete stainless-steel tables are provided with a group of 15 students for each table. The dissection facility is available for students on a rotation basis under the faculty's guidance for each table. The department provides a complete articulated bone set and Disarticulate bones to every table. More than 100 coloured charts and History of Anatomy Charts and X–Ray Lobbies are organized over the walls of Dissection Hall. It has ample space to accommodate the Embalming Room and Cadaver storage, Storeroom, and Lockers Room.", show: true },
    subHead3: { text: "Museum", show: true },
    para3: { text: "A spacious area of 200 Sq.m with a teaching area, it has an ample number of dissected and preserved specimens, fetal anomalies, articulated skeletons, disarticulated bones, various models, and Charts. A separate area for X-ray lobbies to display X–rays and CT and MRI Films.", show: true },
    subHead4: { text: "Histology Lab", show: true },
    para4: { text: "Area of 200 Sq.m with teaching area, well equipped with Monocular and Binocular microscopes. It is provided to each student during practical with a good illumination facility over laboratory examination tables. The department provides an individual set of slides for every student to study during lab sessions. A Separate complete theory class on histology topic followed by a demo and provided stained slides for every student. Colored charts of all tissues are displayed over the wall of the Histology Lab. Preparation room and store room, Technician rooms are accommodated within the lab.", show: true }
  },
  physiology: {
    mainHeader: "Department of Physiology",
    subHead1: { text: "About Physiology", show: true },
    para1: { text: "Physiology is the study of how the human body works. It describes the chemistry and physics behind basic body functions, from how molecules behave in cells to how systems of organs work together. It helps us understand what happens in a healthy body in everyday life and what goes wrong when someone gets sick. \n \n Physiology is a branch of science that deals with the general concepts and biophysical and biochemical principles that are basic to the function of all the systems. Medicine is an ever-changing science. As new research and clinical experience broaden our knowledge, changes in treatment and drug therapy are required. In Human Physiology, we attempt to explain the specific characteristics and mechanisms of the human body that make it a living being. The very fact that we remain alive is almost beyond our control, for, hunger makes us seek food and fear makes us seek refuge. Sensations of cold make us look for warmth. Other forces cause us to seek fellowship and to reproduce. Thus, the human being is actually an automaton, and the fact that we are sensing, feeling, and knowledgeable beings is part of this automatic sequence of life; these special attributes allow us to exist under widely varying conditions which physiologists term as HOMOSTASIS. \n \n We feel that the teacher of physiology in a medical school owes it to his or her students, to emphasize those aspects of the subject which will throw light upon functions and disorders and train them well in approach towards the diagnosis and treatment of disease. The physiologist, can, in this way play a part in giving the student and physician a vantage point from which he may gain a rational view of pathological processes.", show: true },
    subHead2: { text: "", show: false },
    para2: { text: "", show: false },
    subHead3: { text: "", show: false },
    para3: { text: "", show: false },
    subHead4: { text: "", show: false },
    para4: { text: "", show: false }
  },
  biochemistry: {
    mainHeader: "Department of Biochemistry",
    subHead1: { text: "About Biochemistry", show: true },
    para1: { text: "We, the team of biochemistry with dedicated faculties and hard working staff performs our daily professional duties diligently in an ambience of state-of –art infrastructure at our Department of Biochemistry and at Clinical Biochemistry Laboratory. \n \n Integration of medical education research and patient care by joining hands with all Departments to attain the zenith of excellence with utmost Curiosity, Creativity and Confidence in the process of transforming us into an Ethical, Professional, Diplomatic And Lively Human Beings, with high spirits in the long run. \n \n Biochemistry is the study of chemical processes within and relating to living organisms. Over the last decades of the 20th century, biochemistry has become successful at explaining living processes in the field of medicine. Biochemistry focuses on understanding the chemical basis which allows biological molecules to give rise to the processes that occur within living cells and between cells, in turn relating greatly to the understanding of tissues and organs, as well as organism structure and function. Biochemistry is closely related to molecular biology and gene therapy which has tremendous impact on human life. \n \n We strongly believe in and practice in Conglomerating our culture, traditional values with sophisticated knowledge and clinical skills flavoured with a humane touch. \n \n All the above blend of opportunities are experienced and cherished at our Department of Biochemistry Rajalakshmi Health City.", show: true },
    subHead2: { text: "", show: false },
    para2: { text: "", show: false },
    subHead3: { text: "", show: false },
    para3: { text: "", show: false },
    subHead4: { text: "", show: false },
    para4: { text: "", show: false }
  },
  pharmacology: {
    mainHeader: "Department of Pharmacology",
    subHead1: { text: "About Pharmacology", show: true },
    para1: { text: "Pharmacology involves the study and description of the drugs and their effect on whole human system. As Pharmacologist deals with health care system, the knowledge about the hospital and clinical pharmacy is also essential for better clinical output. Pharmacology Department of Rajalakshmi Health City focus on educating the students in theoretical and clinical aspects of drugs. Pharmacology department also correlates with every other department to gain the knowledge of the effects produced by the drugs prescribed and also the side effects of the drugs. These are keenly noted and documented for pharmaco vigilance documentation and verified through a Committee as per the NMC norms.", show: true },
    subHead2: { text: "", show: false },
    para2: { text: "", show: false },
    subHead3: { text: "", show: false },
    para3: { text: "", show: false },
    subHead4: { text: "", show: false },
    para4: { text: "", show: false }
  },
  pathology: {
    mainHeader: "Department of Pathology",
    subHead1: { text: "About Pathology", show: true },
    para1: { text: "Pathology is one of the most vibrant and lively department of Rajalakshmi Health City. The department is engaged in diagnostic work that caters primarily to AMCH. The department offers comprehensive services in Histopathology, Cytology, Immunohistochemistry, Clinical Pathology and Hematology. The department is headed by an enthusiastic Pathologist and comprises of a team of both young and experienced faculty which are actively involved in diagnostic work, research, curriculum development. The faculties are eligible for undergraduate, postgraduate students teaching. Our main focus is to inspire the students to come into the society as good health Innovative teaching to prepare future leaders in pathology \n (i). Produce high impact research to expand our basic understanding of health and disease \n (ii). To provide timely and highest quality diagnostic service to our patients", show: true },
    subHead2: { text: "", show: false },
    para2: { text: "", show: false },
    subHead3: { text: "", show: false },
    para3: { text: "", show: false },
    subHead4: { text: "", show: false },
    para4: { text: "", show: false }
  },
  microbiology: {
    mainHeader: "Department of Microbiology",
    subHead1: { text: "About Microbiology", show: true },
    para1: { text: "Department of Microbiology has several functional subdivisions. The Clinical Microbiology divisions of Rajalakshmi Health City provide laboratory services. The other divisions include Mycology, Virology, Mycobacteriology, Parasitology, Immunology. The laboratory has the expertise to diagnose all infectious diseases and offer support for the management of infections both in hospital and community. The department has well qualified teaching and non-teaching faculties graduated from renowned medical institutions. \n \n Also involved in National programs like National Tuberculosis Elimination Program, Integrated Counselling and Testing Centre for diagnosis of HIV infections and focuses on Microbiological Diagnosis and surveillance of infectious diseases including community health and preventive activities \n \n Hand hygiene and biomedical waste management sensitization programs are conducted for Staff nurses at regular intervals. Microbiology department is actively takes part in the infection control and surveillance activities and help in formulating antibiotic policy for hospital, which is monitored by Infectious Control Committee.", show: true },
    subHead2: { text: "", show: false },
    para2: { text: "", show: false },
    subHead3: { text: "", show: false },
    para3: { text: "", show: false },
    subHead4: { text: "", show: false },
    para4: { text: "", show: false }
  },
  forensicmedicine: {
    mainHeader: "Department of Forensic Medicine",
    subHead1: { text: "About Forensic Medicine", show: true },
    para1: { text: "Department of Forensic Medicine at Rajalakshmi Health City, Chennai has a well-equipped lecture theatre, demonstration rooms, and a well-organized centralized museum. The department has well-equipped Morgue that has facility to store the bodies. \n \n The department has taken the responsibility to produce the physician who is well informed about Medico-Legal Responsibilities, Medical Ethics, And Etiquette In the practice of Medicine. \n \n The student of Forensic Medicine are taught to provide the power of observation, a wide range of exact knowledge and the power of deduction, and the power of constructive imagination. \n \n The department mould the student in such a way that he is able to develop the skills of making observations and logical inferences by improving his knowledge of medico-legal aspects in an integrated manner.", show: true },
    subHead2: { text: "", show: false },
    para2: { text: "", show: false },
    subHead3: { text: "", show: false },
    para3: { text: "", show: false },
    subHead4: { text: "", show: false },
    para4: { text: "", show: false }
  },
  communitymedicine: {
    mainHeader: "Department of Community Medicine",
    subHead1: { text: "About Community Medicine", show: true },
    para1: { text: "Based on the recommendations of the National Medical Commission of India, the department has grown in stature and strength and assumed greater responsibilities of managing health delivery in the vicinities of Sriperumbudur. \n \n Faculty in the department are qualified professionals in medicine as well as in the field of community health, social work and health planning for field-based service provision. Trained to be primary care physicians, researchers and administrators with the prerequisite clinical skills, knowledge of epidemiological and management principles, faculty have the ability to transfer of knowledge for improvement of the community health and various national targets for public health. \n \n", show: true },
    subHead2: { text: "Community Health Centres", show: true },
    para2: { text: "1. Name: RHTC- Rural Health and Training Center     Location: PudhuNallur \n 2. Name: UHTC- Urban Health and Training Center     Location: SriPerumbudur", show: true },
    subHead3: { text: "The objectives of the Health Centre's are:-", show: true },
    para3: { text: "i. To provide preventive, curative, promotive and rehabilitation services to the field practice areas of Rural and Urban Health Centres. \n \n ii. To provide primary health services and referral services at Rural and Urban Health Centres. \n \n iii. To develop undergraduates as primary care physicians to recognize, identify, prioritize and mange community health and social problems. \n \n iv. To guide undergraduates in performing Family Adoption Program and community health research activities. \n \n v. To implement, monitor and evaluate the National Health programmes in the field practice area of Rural and Urban Health Centres. \n \n vi. As per the National Medical Commission (NMC) mandated Family Adoption Programme (FAP) activities are undertaken by the department.", show: true },
    subHead4: { text: "", show: false },
    para4: { text: "", show: false }
  },
  generalmedicine: {
    mainHeader: "Department of General Medicine",
    subHead1: { text: "About General Medicine", show: true },
    para1: { text: "The Department of Medicine is one of the key departments with lot of out-patients visiting daily and ICUs. It caters to general medical problems and medical emergencies. \n \n The department also conducts community camps where screening for various medical problems like Diabetes, Hypertension, Bronchial Asthma, Kidney diseases etc. General Medicine is the special branch and speciality of medicine that deals with the diagnosis and non-surgical treatment of diseases, and focuses on how to prevent, diagnose, and treat diseases.", show: true },
    subHead2: { text: "", show: false },
    para2: { text: "", show: false },
    subHead3: { text: "", show: false },
    para3: { text: "", show: false },
    subHead4: { text: "", show: false },
    para4: { text: "", show: false }
  },
  paediatrics: {
    mainHeader: "Department of Paediatrics",
    subHead1: { text: "About Paediatrics", show: true },
    para1: { text: "Paediatrics is a specialised branch dealing with children < 18 years of age. We offer services from neonates to adolescents for all disorders. We emphasize on growth, development, nutrition and immunization. OPD Services include giving best care to ill child, identifying, malnourished children, treating acute emergencies like anaphylaxis, seizures, acute exacerbation of wheeze and poisoning. We have excellent lab services and radiological services for rapid diagnosis and treatment purpose for children. \n \n We offer day-care services too. We provide inpatient facilities to sick children for quick recovery. \n \n Following are our specialty clinics being seen everyday: \n Child rehabilitation \n Cardiology \n Haematology \n Neurology \n Gastroenterology \n Pulmonology and immunization \n \n We conduct outreach programmes and community activity for orphanages and nearby villages. We conduct basic screening and provide medicines free of cost. If needed they are being referred to our hospital for follow-up and management.", show: true },
    subHead2: { text: "", show: false },
    para2: { text: "", show: false },
    subHead3: { text: "", show: false },
    para3: { text: "", show: false },
    subHead4: { text: "", show: false },
    para4: { text: "", show: false }
  },
  dermatology: {
    mainHeader: "Department of Dermatology",
    subHead1: { text: "About Dermatology", show: true },
    para1: { text: "Dermatology is a specialized branch of medicine that focuses on diagnosing and treating disorders of the skin, hair and nails. Dermatologists are specialized medical professionals who have expertise in diagnosing, treating various skin conditions such as Acne, Eczema, Psoriasis etc.", show: true },
    subHead2: { text: "Diagnostic Techniques", show: true },
    para2: { text: "Skin punch Biopsy / Excision Biopsy \n Wound Culture / Sensitivity \n Grams Stain \n KOH Mount \n Fungal Culture", show: true },
    subHead3: { text: "Therapeutic Techniques", show: true },
    para3: { text: "Electrocautery (SKIN TAGS, WARTS, MOLES, DPN) \n Radiofrequency \n Intralesional Injection Of Steroids MMR \n Cryotherapy \n Comedone Extraction \n Immune Therapy For WARTS \n Molluscum Curette \n \n The department participates in the community activities and organizes camps for various stakeholders.", show: true },
    subHead4: { text: "", show: false },
    para4: { text: "", show: false }
  },
  psychiatry: {
    mainHeader: "Department of Psychiatry",
    subHead1: { text: "About Psychiatry", show: true },
    para1: { text: "The Department of Psychiatry at Rajalakshmi Health City stands as a critical hub for understanding, diagnosing and treating mental health disorders. \n \n The department of Psychiatry is dedicated to unraveling the complexities of the human mind, fostering compassionate care for individuals facing mental health challenges, and advancing the field through research and education. \n \n Clinical care is at the forefront of the Department of Psychiatry's mission involving both Out-Patient and In-patient services (OP & IP). \n \n Psychiatrists and mental health professionals within the department provide comprehensive evaluation and treatment for a spectrum of mental health disorders. \n \n The department is equipped to address the diverse needs of patients suffering from mood and anxiety disorders, substance use disorders, Child and Adolescent disorders, insomnia, Geriatric disorders etc are some among them. \n \n Therapeutic interventions, including psychotherapy and pharmacotherapy, are tailored to each individual, emphasizing a patient-centered and holistic approach. \n \n Services are provided by a multi-disciplinary team comprising of psychiatrists, Psychologist, Psychiatric social workers, & psychiatric nurses. \n \n Faculty members, often experience clinicians and researchers, engage students in a curriculum that covers the nuances of psychiatric diagnoses, treatment modalities, and the societal implications of mental health. \n \n Practical training in psychiatric settings, coupled with theoretical knowledge, equips students to navigate the complexities of mental health care.", show: true },
    subHead2: { text: "", show: false },
    para2: { text: "", show: false },
    subHead3: { text: "", show: false },
    para3: { text: "", show: false },
    subHead4: { text: "", show: false },
    para4: { text: "", show: false }
  },
  generalsurgery: {
    mainHeader: "Department of General Surgery",
    subHead1: { text: "About General Surgery", show: true },
    para1: { text: "Department of General Surgery is committed to excellence in Patient Care, Education and Research. Our Department is at the forefront of surgical innovation & compassionate healthcare. Explore our dedicated team of skilled surgeons, cutting edge procedures. Join us in advancing the boundaries of surgical knowledge & enhancing the healthcare and wellbeing of our community.", show: true },
    subHead2: { text: "The department has various facilities like", show: true },
    para2: { text: "Advanced modular operation theatre \n Advanced Laparoscopic monitor and instruments \n Well-equipped team to manage Surgical Emergencies. \n SICU Care \n Special Wards and General Wards", show: true },
    subHead3: { text: "The clinical services offered at the hospital are as under", show: true },
    para3: { text: "1.Emergency Surgeries \n Appendectomy \n Cholecystectomy \n Hernia Repair \n Laparotomy \n Wound Debridement – Amputation Surgeries \n \n 2.Breast Surgeries \n Modified Radical Mastectomy \n Simple Mastectomy \n Lump Excision \n \n 3.Thyroid Surgeries \n Total Thyroidectomy \n Hemi Thyroidectomy \n Central Neck Node Dissection \n Sistrunk Procedure \n \n 4.Laproscopic Surgeries \n Lap Hernia Repair (TAPP/TEP) \n Lap Appendiectomy \n Lap Cholecystectomy \n Lap Varicocelectomy \n Lap Adhesiolysis \n \n 5.Proctology Cases \n Hemorrhoidectomy \n Fistulectomy \n Lateral Anal Sphincterotomy \n Limberg Flap For Pilonidal Sinus \n \n 6.Others \n Hydrocele Surgery \n Lymph Node Biopsies \n Varicose Veins Surgery", show: true },
    subHead4: { text: "The Department also conducts minor procedures like", show: true },
    para4: { text: "Lipoma Excision \n Sebaceous Cyst Excision \n Incision & Drainage \n Dermoid Excision \n Amputation Procedures", show: true }
  },
  orthopaedics: {
    mainHeader: "Department of Orthopaedics",
    subHead1: { text: "About Orthopaedics", show: true },
    para1: { text: "The state of art orthopaedic department caters to a diverse range of musculoskeletal ailments and disease. Our department is well equipped to cater to a wide range of procedures from trauma to joint replacement surgery. We have particularly carved ourselves a niche for spine surgeries including posterior decompression and fixation, discectomy, spinal deformity correction, listhesis correction. Our excellent rehabilitation team also ensures faster recovery time and sustained support over the entire process.", show: true },
    subHead2: { text: "", show: false },
    para2: { text: "", show: false },
    subHead3: { text: "", show: false },
    para3: { text: "", show: false },
    subHead4: { text: "", show: false },
    para4: { text: "", show: false }
  },
  ent: {
    mainHeader: "Department of ENT",
    subHead1: { text: "About ENT", show: true },
    para1: { text: "Our multi-disciplinary field encompasses various medical and surgical aspects, addressing issues such as hearing loss, sinusitis, voice disorders, and more. We work with advanced diagnostic tools and therapeutic techniques to provide comprehensive care at Rajalakshmi Health City. \n \n We perform OPD procedures like, Nasal endoscopy, Videolaryngoscopy, Oto Endoscopy, Foreign body removal, Aural syringing, Intralesional steroid injection, Nasal packing, Stroboscopy & Speech therapy, Vertigo & Videonystagmography, Allergy & Immunology Obstructive sleep apnea, Head & neck oncology.", show: true },
    subHead2: { text: "Audiological evaluations include", show: true },
    para2: { text: "Pure Tone Audiometry \n Impedance audiometry \n OtoAcoustic Emission test for newborns \n Brain Evoked Response Audiometry (BERA) in our audiology set up \n Speech therapy for numerous speech disorders like stammering, stuttering, rehabilitation after laryngectomy as well as voice analysis", show: true },
    subHead3: { text: "Operative procedures include", show: true },
    para3: { text: "Ear surgeries \n Tympanoplasty \n Mastoidectomy \n Myringotomy with Grommet insertion \n Preauricular sinus excision \n Keloid excision \n Ear lobe repair \n Intratympanic PRP injection \n Sinus and nose related surgeries Functional endoscopic sinus surgery \n Endoscopic SEPTOPLASTY", show: true },
    subHead4: { text: "", show: false },
    para4: { text: "", show: false }
  },
  ophthalmology: {
    mainHeader: "Department of Ophthalmology",
    subHead1: { text: "About Ophthalmology", show: true },
    para1: { text: "The Department of Ophthalmology provides excellent services for effective diagnosis, treatment and research in eye diseases. Our main objective in to place emphasis on both clinical and para clinical student training in order to strengthen their research and clinical capabilities. \n \n We are well equipped with infrastructure to deal with both common as well as unique ophthalmic problems. Outreach camps are conducted frequently in nearby villages and are provided free treatment. We are also conducting school camps for screening purpose and children are referred to our centre appropriately.", show: true },
    subHead2: { text: "", show: false },
    para2: { text: "", show: false },
    subHead3: { text: "", show: false },
    para3: { text: "", show: false },
    subHead4: { text: "", show: false },
    para4: { text: "", show: false }
  },
  obg: {
    mainHeader: "OBG",
    subHead1: { text: "About OBG", show: true },
    para1: { text: "The Department of Obstetrics and Gynaecology at Rajalakshmi Health City is established in 2021 and is a multispecialty department, providing high quality patient care in the areas of antenatal care, postnatal welfare and infertility. Regular antenatal care is offered for pregnant women. Focused care is given for high-risk Pregnancies. A dedicated Feto Maternal Unit provides quality care. Facilities include targeted ultrasound, prenatal screening, Chronic villous Sampling, amniocentesis, intrauterine. State-of-the-art labour rooms are manned 24x7 by a qualified experienced team of doctors, nurses and paramedics, supported by a team of anesthetists and neonatologist who provide 24*7 in-house services. Our services for women spread from catering to the needs of adolescent girls to the elderly women.", show: true },
    subHead2: { text: "", show: false },
    para2: { text: "", show: false },
    subHead3: { text: "", show: false },
    para3: { text: "", show: false },
    subHead4: { text: "", show: false },
    para4: { text: "", show: false }
  },
  anaesthesiology: {
    mainHeader: "Department of Anaesthesiology",
    subHead1: { text: "About Anesthesia", show: true },
    para1: { text: "The Department of Anesthesia at Rajalakshmi Health City is dedicated to providing exceptional care to our patients before, during, and after surgical procedures. Our team of highly skilled anesthesiologists, nurse anesthetists, and support staff is committed to ensuring the safety, comfort, and well-being of every individual entrusted to our care.", show: true },
    subHead2: { text: "Our Services:-", show: true },
    para2: { text: "Anesthetic Care: Our department specializes in delivering personalized anesthetic care tailored to each patient's unique needs, ensuring a comfortable and stress-free experience during surgical procedures. \n \n Perioperative Management: We work closely with surgical teams to optimize patient outcomes and provide comprehensive perioperative care, addressing the complex medical needs of each individual. \n \n Pain Management: Our experts are proficient in managing acute and chronic pain, utilizing advanced techniques to alleviate discomfort and enhance recovery for our patients. \n \n Critical Care: In collaboration with the critical care team, we provide expert management of patients in critical condition, ensuring the highest level of care and support during challenging medical situations.", show: true },
    subHead3: { text: "Innovation and Research:-", show: true },
    para3: { text: "Our department is dedicated to advancing the field of anesthesia through ongoing research, education, and the implementation of cutting-edge technologies. We prioritize innovation to improve anesthetic techniques, medication, and equipment, with a focus on enhancing patient safety, outcomes, and overall experience.", show: true },
    subHead4: { text: "Collaborative Approach:-", show: true },
    para4: { text: "We believe in fostering collaboration with surgical teams, nursing staff, and other healthcare professionals to deliver seamless and integrated care to our patients. By working together, we ensure that each patient receives comprehensive, multidisciplinary support throughout their healthcare journey. \n \n At Rajalakshmi Health City, we are committed to excellence in anesthesia, continuously striving to set new standards for patient care, safety, and comfort. Our dedication to continuous improvement reflects our unwavering commitment to our patients and their families.", show: true }
  },
  radiology: {
    mainHeader: "Department of Radiology",
    subHead1: { text: "About Radiology", show: true },
    para1: { text: "The Department of Radiology and Imaging Sciences offers diagnostic services through wide array of imaging modalities like interventional radiology as well as therapeutic procedures and executes intensive care for the patients. The department follows a dedicated and patient-centric approach for providing timely diagnostic imaging facilities to patients of all other departments of the hospital as well as out-patients. Basic imaging facilities are provided by the X-ray department, with advanced and state of the art MRI and CT facilities also available 24/7. \n \n The Radiology department is equipped with a number of fixed High Frequency Radiography machines incorporated with CR system and Digital Radiography unit. Portable radiography units are kept on each floor of the hospital, in the intensive care units, hospital wards and operation theatres. \n \n This was possible by a dedicated team of Radiologists, Interventionists, technologists and allied health staff.", show: true },
    subHead2: { text: "", show: false },
    para2: { text: "", show: false },
    subHead3: { text: "", show: false },
    para3: { text: "", show: false },
    subHead4: { text: "", show: false },
    para4: { text: "", show: false }
  },
  dentistry: {
    mainHeader: "Department of Dentistry",
    subHead1: { text: "About Dentistry", show: true },
    para1: { text: "The Department of Dentistry at Rajalakshmi Health City focuses on the diagnosis, treatment, planning and prevention of oral diseases and conditions of the oral cavity and related structures. We focus on cosmetic dentistry and medical dentistry.", show: true },
    subHead2: { text: "Our expertise include the following", show: true },
    para2: { text: "Teeth alignment – Braces, Invisible braces \n Dentofacial orthopedics – removable and fixed appliances \n Extractions and impactions", show: true },
    subHead3: { text: "Treatment Offered", show: true },
    para3: { text: "General cleaning and whitening of teeth \n Jaw pain \n Swollen or bleeding gums \n Missing teeth \n Dry mouth \n Tooth pain \n Tooth sensitivity \n Broken teeth \n Bad break \n Teeth aligning \n Other cosmetic procedures \n Jaw surgeries \n Diagnosis and prevention of oral cancers", show: true },
    subHead4: { text: "", show: false },
    para4: { text: "", show: false }
  },
  emergencymedicine: {
    mainHeader: "Department of Emergency Medicine",
    subHead1: { text: "About Emergency Medicine", show: true },
    para1: { text: "Department of emergency provides excellence services of all trauma cases. Cardiac cases and all emergency sick cases. Doctors are available round the clock at the Emergency Medicine department. Ambulance services are available for 24X7. Attendants of the Casualty patients can approach the Hospital Pharmacy facilities for the patients, which operates 24 X 7. Over department is well equipped and have specialized doctors and staffs to provide best care to the patients.", show: true },
    subHead2: { text: "", show: false },
    para2: { text: "", show: false },
    subHead3: { text: "", show: false },
    para3: { text: "", show: false },
    subHead4: { text: "", show: false },
    para4: { text: "", show: false }
  }
};


document.querySelectorAll('button[id]').forEach(button => {
  button.addEventListener('click', () => {
    const id = button.id;
    const data = contentMap[id];
    if (!data) return;

    document.getElementById("mainHeader").innerText = data.mainHeader;

    toggleSection("subHead1", "para1", "section1", data.subHead1, data.para1);
    toggleSection("subHead2", "para2", "section2", data.subHead2, data.para2);
    toggleSection("subHead3", "para3", "section3", data.subHead3, data.para3);
    toggleSection("subHead4", "para4", "section4", data.subHead4, data.para4);

    deptOverlay.classList.add('show');

    // 🔒 Disable body scroll
    document.body.style.overflow = 'hidden';
  });
});

closeBtn.addEventListener('click', () => {
  deptOverlay.classList.remove('show');

  // 🔓 Re-enable body scroll
  document.body.style.overflow = '';
});

function toggleSection(headId, paraId, sectionId, headObj, paraObj) {
  const headEl = document.getElementById(headId);
  const paraEl = document.getElementById(paraId);
  const sectionEl = document.getElementById(sectionId);

  if (headObj.show || paraObj.show) {
    sectionEl.classList.remove('hidden');
    headEl.innerText = headObj.text;
    paraEl.innerText = paraObj.text;
  } else {
    sectionEl.classList.add('hidden');
    headEl.innerText = "";
    paraEl.innerText = "";
  }
}