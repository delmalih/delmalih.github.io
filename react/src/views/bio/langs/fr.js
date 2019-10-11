// React
import React from 'react';

/** EDUCATION **/

const edu_centrale = {
  title: "CentraleSupélec - Master en ingénieurie",
  date: "Sept. 16 - Auj.",
  description: (
    <div>
      <span>CentraleSupélec est une prestigieuse école d&#039;ingénieurs, membre des Grandes Ecoles de France, basée sur un processus d&#039;admission très séléctif.</span><br />
      <br />
      <ul>
        <li><b>Entreprise & Management :</b> Gestion d&#039;entreprise, Finance d&#039;entreprise, Leadership, Jeux d&#039;entreprise, Création d&#039;entreprise</li>
        <li><b>Mathématiques :</b> Analyse, Probabilités, Statistiques, Equations aux dérivées partielles</li>
        <li><b>Informatique :</b> Algorithmique, Développement Logiciel (Python), Développement Logiciel et Programmation orientée objet (Java), Machine Learning, Sciences de l&#039;information & Communications numériques</li>
        <li><b>Physique :</b> Physique quantique et statistique, Thermodynamique appliquée</li>
        <li><b>Ingénierie :</b> Ingénierie des Systèmes complexes, Systèmes embarqués</li>
        <li><b>Autres :</b> Droit, Economie, Philosophie des Sciences, Epistémologie, Sciences du vivant</li>
      </ul>
    </div>
  ),
};

const edu_janson = {
  title: "Lycée Janson de Sailly, Paris",
  date: "Sept. 14 - Juin 16",
  description: <span>Classes préparatoires aux grandes écoles - PCSI/PSI*</span>,
};

const edu_enh = {
  title: "Lycée ENH, Casablanca",
  date: "2014",
  description: (
    <div>
      <span>Baccalauréat série scientifique, académie de Bordeaux</span><br />
      <span>Mention bien</span>
    </div>
  ),
};

/** WOKR EXPERIENCE **/

const work_yoobic = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/tech%20experiences%2Fyoobic.png?alt=media&token=dfc18df7-443b-41f7-a882-8f94d468d1f3",
  title: "Stagiaire Data Sciences @ Yoobic",
  date: "Sep 2018 - Actuel",
  description: (
    <div>
      <span>Yoobic est une solution de productivité mobile qui aide les marques à communiquer plus efficacement avec les magasins afin d’améliorer leur expérience de magasinage et d’augmenter leurs revenus.</span>
      <ul>
        <li>Détection d'objets: Détection de plusieurs petits objets, physiquement proches, dans une image</li>
        <li>Transfer learning: Training et evaluation d'un réseau de neurones profond à l'aide de tensorflow</li>
        <li>Traitement d'image: Correction de perspective, détection de clusters d'objets, vérification de conformité</li>
      </ul>
      <span><b>Techs: </b>Python, Tensorflow, Réseaux Deep Learning (Faster-RCNN, Mask-RCNN, YoloV2), Gcloud Machines, OpenCV</span>
    </div>
  ),
};

const work_pdl = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/tech%20experiences%2Fpdl.png?alt=media&token=dd076c57-faba-40e3-9216-a7259d7a28f2",
  title: "Ingénieur Développeur @ ParisDigitalLab",
  date: "Jan 2018 - Juil. 2018",
  description: (
    <div>
      <span>ParisDigitalLab est une communauté de décideurs :</span><br />
      <ul>
        <li>Travaillant sur des projets concrets pour de grandes et petites entreprises</li>
        <li>Utilisant le prototypage Agile</li>
        <li>Créant des innovations disruptives axées sur la technologie</li>
        <li>Produisant des prototypes qui améliorent l&#039;expérience utilisateur</li>
        <li>Appliquant la méthodologie &ldquo;Lean start-up&rdquo;</li>
      </ul>
    </div>
  ),
};

const work_accorhotels = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/tech%20experiences%2Faccorhotels.png?alt=media&token=ff71a92c-ebba-49a7-ba7e-948d5845a8e1",
  title: "Ingénieur Développeur - Projet IoT @ Groupe AccorHotels",
  date: "Fev 2018 - Avr 2018",
  description: (
    <div>
      <ul>
        <li>Leader mondial de l&#039;hôtellerie et des services - Plus de 250.000 femmes et hommes dans près de 4.200 adresses AccorHotels traitent chaque jour des milliers de clients dans 95 pays</li>
        <li>Conception d&#039;un système de sécurité IoT pour protéger les membres du personnel contre le harcèlement sexuel dans les hôtels</li>
        <li>Une semaine complète de <i>Design Thinkin</i> avant de concevoir le produit</li>
        <li>Envoi et sauvegarde de l&#039;historique des alertes lorsque le membre du personnel est en danger</li>
      </ul>
      <span><b>Techs: </b>LoraWAN, Arduino, RFID/NFC, Node.js, ReactJS, Firebase</span>
    </div>
  ),
};

const work_interimco = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/tech%20experiences%2Finterimco.jpg?alt=media&token=eea2f3f1-776d-4740-86f9-825795eccfdb",
  title: "Ingénieur Développeur - Projet Chatbot @ InterimCo",
  date: "Avr 2018 - Mai 2018",
  description: (
    <div>
      <ul>
        <li>Agence de recrutement pour intérimaires</li>
        <li>Développement d&#39;un agent conversationnel (chatbot) de recrutement qui a pour but de pré-qualifier les candidats par Messenger ou Telegram</li>
        <li>Développement d&#39;un tableau de bord d&#39;administration pour suivre et contrôler les actions du chatbot</li>
      </ul>
      <span><b>Techs: </b>Python, Flask, Dialogflow, Node.js, ReactJS, Firebase, Elasticsearch</span>
    </div>
  ),
};

const work_ratp = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/tech%20experiences%2Fratp.png?alt=media&token=70fa90cc-7b03-4447-989c-9084efc9c4ba",
  title: "Data Scientist - Projet Machine Learning @ Groupe RATP",
  date: "Mai 2018 - Juil. 2018",
  description: (
    <div>
      <ul>
        <li>Régie Autonome des Transports Parisiens</li>
        <li>Développement d&#39;un logiciel de détection d&#39;anomalies à partir de données quotidiennes sur une ligne de métro</li>
        <li>Reconnaissance de patterns non supervisée à partir de données non structurées</li>
      </ul>
      <span><b>Techs: </b>Python, Flask, Scikit-Learn, Keras, Pandas, ReactJS, Electron</span>
    </div>
  ),
};

const work_lsdj = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/tech%20experiences%2Flsdj.png?alt=media&token=a2b2681c-fc54-4485-bdc2-6da77b7e459e",
  title: "Développeur Web et Mobile @ Le Silence Des Justes",
  date: "Nov 2017 - Feb 2018",
  description: (
    <div>
      <ul>
        <li>Le Silence Des Justes est une association à but non lucratif qui aide les enfants autistes</li>
        <li>Développement d&#039;une application pour la collecte de dons</li>
      </ul>
      <span><b>Techs: </b>React Native, PHP, Firebase</span><br />
    </div>
  ),
};

const work_cs = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/tech%20experiences%2Fcs.png?alt=media&token=a38fb302-2c85-486e-a87c-add48ff61374",
  title: "Data scientist @ CentraleSupélec",
  date: "Nov 2017 - Jan 2018",
  description: (
    <div>
      <ul>
        <li>Prediction du nombre de partages qu&#039;un article obtiendra sur les réseaux sociaux, à partir du sujet de l&#039;article, sa longueur, le jour de sa publication, et de nombreuses autres features</li>
        <li>Kaggle-in-class challenge</li>
        <li>Projet étudiant</li>
      </ul>
      <span><b>Techs: </b>Python, Scikit Learn, Pandas, Numpy</span><br />
      <span><b>Liens: </b><a href='https://www.kaggle.com/c/how-many-shares' rel="noopener noreferrer" target='_blank'>kaggle.com/c/how-many-shares</a></span><br />
    </div>
  ),
};

const work_valeo = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/tech%20experiences%2Fvaleo.png?alt=media&token=28cdc7b7-2296-48be-850d-3187fcceaaa2",
  title: "Ingénieur et Data scientist @ Valeo",
  date: "Jun 2017 - Jul 2017",
  description: (
    <div>
      <ul>
        <li>Calibration de caméra automatisée.</li>
        <li>Automated camera calibration</li>
        <li>Reconnaissance faciale par machine learning.</li>
      </ul>
      <span><b>Techs: </b>Python, OpenCV, Numpy</span><br />
    </div>
  ),
};

const work_cc = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/tech%20experiences%2Fconduitecenter.png?alt=media&token=3b2e7ac8-a280-4fb1-bd9a-66a5d5f2855d",
  title: "Développeur Full Stack @ ConduiteCenter",
  date: "Jan 2017 - Jan 2018",
  description: (
    <div>
      <ul>
        <li>Développement Full stack du site web <a href='http://my.conduitecenter.fr/' rel="noopener noreferrer" target='_blank'>http://my.conduitecenter.fr</a> pour ConduiteCenter, l&#039;auto école en ligne.</li>
        <li>Gestion des étudiants sur toute la France.</li>
        <li>Planification de cours en fonction des emplois du temps des étudiants et des moniteurs.</li>
        <li>Paiement de forfait en ligne.</li>
        <li>Edition automatique de factures et de contrats.</li>
        <li>Gestion de la trésorerie de l&#039;entreprise via la plateforme.</li>
      </ul>
      <span><b>Techs: </b>ReactJS, Node.js, Firebase (PHP and MySQL pour la V1)</span><br />
    </div>
  ), 
};

/** ACHIEVEMENTS **/

const achievement_unsupervisedAnomalyDetection = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/achievements%2Fanomaly-detection.png?alt=media&token=dd5e786d-411a-43d9-9b77-3bb029964e2b",
  title: "Détection d'anomalies non supervisée",
  description: (
    <ul>
      <li>Projet Data Science - Groupe RATP – Régie Autonome des Transports Parisiens</li>
      <li>Développement d&#39;un logiciel de détection d&#39;anomalies à partir de données quotidiennes sur une ligne de métro</li>
      <li>Reconnaissance de patterns non supervisée à partir de données non structurées</li>
      <b>Techs:</b> Python, Flask, Scikit-Learn, Keras, Pandas, ReactJS, Electron
    </ul>
  ),
};

const achievement_recruitmentChatbot = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/achievements%2Fchatbot.png?alt=media&token=2a2dcd78-6d03-49ee-80ea-a6aaa173380f",
  title: "Chatbot de recrutement",
  description: (
    <ul>
      <li>Projet Chatbot - InterimCo – Agence de recrutement pour intérimaires</li>
      <li>Développement d&#39;un agent conversationnel (chatbot) de recrutement qui a pour but de pré-qualifier les candidats par Messenger ou Telegram</li>
      <li>Développement d&#39;un tableau de bord d&#39;administration pour suivre et contrôler les actions du chatbot</li>
      <b>Techs:</b> Python, Flask, Dialogflow, Node.js, ReactJS, Firebase, Elasticsearch
    </ul>
  ),
};

const achievement_iotDevice = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/achievements%2Fiot.png?alt=media&token=77ac086b-36c6-425b-a8a7-243979b16e38",
  title: "Dispositif de sécurité IoT",
  description: (
    <ul>
      <li>Groupe AccorHotels – Leader mondial de l&#39;hôtellerie et des services – Plus de 250.000 femmes et hommes dans près de 4.200 adresses AccorHotels traitent chaque jour des milliers de clients dans 95 pays</li>
      <li>Conception d&#039;un système de sécurité IoT pour protéger les membres du personnel contre le harcèlement sexuel dans les hôtels</li>
      <li>Une semaine complète de <i>Design Thinkin</i> avant de concevoir le produit</li>
      <li>Envoi et sauvegarde de l&#039;historique des alertes lorsque le membre du personnel est en danger</li>
      <b>Techs:</b> LoraWAN, Arduino, RFID/NFC, Node.js, ReactJS, Firebase
    </ul>
  ),
};

const achievement_lsdj = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/achievements%2Flsdj.png?alt=media&token=16c3d7be-a586-4513-bf69-41b5954534f1",
  title: "LSDJ - ReactNative App",
  description: (
    <div>
      <ul>
        <li>Le Silence Des Justes est une association à but non lucratif qui aide les enfants autistes</li>
        <li>Développement d&#039;une application pour la collecte de dons</li>
        <b>Techs:</b> React Native, Firebase, PHP
      </ul>
      <b><a href='https://play.google.com/store/apps/details?id=com.sdjavenir' rel="noopener noreferrer" target='_blank'>Voir le projet</a></b>
    </div>
  ),
};

const achievement_netflix = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/achievements%2Fnetflix.png?alt=media&token=b6e257aa-8eb4-4f06-86be-f7240f2fa751",
  title: "Netflix - Recommendation algorithm",
  description: (
    <ul>
      <li>A partir de la base de données des notes que les utilisateurs de Netflix (plus de 2,5 millions d&#39;utilisateurs) ont donnés aux films (18.000 films), ce projet est la réalisation d&#39;un algorithme machine learning permettant de recommander 10 films à un utilisateur donné</li>
      <li>Aucun bibliothèque n&#39;a été utilisée, tout à été codé from scratch</li>
      <li>kNN (k-Nearest Neighbours) algorithme</li>
      <li>RMSE (Root Mean Squared Error) = 0.1</li>
      <b>Techs:</b> C
    </ul>
  ),
};

const achievement_kaggle = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/achievements%2Fkaggle.png?alt=media&token=079f1f17-0eb1-4eff-b05a-14110c01ffa7",
  title: "How Many Shares ?",
  description: (
    <div>
      <ul>
        <li>Prédiction du nombre de partages qu&#39;un article aura sur les réseaux sociaux, à partir de plusieures features du cet article</li>
        <li>Kaggle-in-class challenge</li>
        <b>Techs:</b> Python, Scikit Learn
      </ul>
      <b><a href='https://www.kaggle.com/c/how-many-shares' rel="noopener noreferrer" target='_blank'>Voir le projet</a></b>
    </div>
  ),
};

const achievement_simergy = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/achievements%2Fsimergy.png?alt=media&token=acb9b269-7eaf-4b2e-b7ef-176d0a2ee293",
  title: "SimErgy",
  description: (
    <ul>
      <li>Développement d&#39;une simulation d&#39;un service d&#39;urgences, en Java</li>
      <li>Algorithmes d&#39;optimisation du temps d&#39;attente</li>
      <li>Optimisation des KPIs (Key Performance Indicator)</li>
      <li>Développement d&#39;une interface console (CLI) et d&#39;une interface graphique (GUI)</li>
      <b>Techs:</b> Java
    </ul>
  ),
};

const achievement_netsim = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/achievements%2Fnetsim.png?alt=media&token=a5f4a005-8a9d-4658-9053-4a02a8d47d9d",
  title: "NetSim",
  description: (
    <ul>
      <li>Planification de communications synchrones</li>
      <li>Système distribué</li>
      <li>Algorithms sur les graphes (Dsatur / Welsh-Powell)</li>
      <li>Programmation Orientée Objet en Python</li>
      <li>Fichiers VTK & DIMACS</li>
      <b>Techs:</b> Python
    </ul>
  ),
};

const achievement_conduitecenter = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/achievements%2Fconduitecenter.png?alt=media&token=51214c74-cc04-4109-9f00-23da88982cdc",
  title: "ConduiteCenter Website",
  description: (
    <div>
      <ul>

        <li>Développement Full stack du site web <a href='http://my.conduitecenter.fr/' rel="noopener noreferrer" target='_blank'>http://my.conduitecenter.fr</a> pour ConduiteCenter, l&#039;auto école en ligne.</li>
        <li>Gestion des étudiants sur toute la France.</li>
        <li>Planification de cours en fonction des emplois du temps des étudiants et des moniteurs.</li>
        <li>Paiement de forfait en ligne.</li>
        <li>Edition automatique de factures et de contrats.</li>
        <li>Gestion de la trésorerie de l&#039;entreprise via la plateforme.</li>
        <b>Techs:</b> ReactJS, Node.js, Firebase (PHP and MySQL pour la V1)
      </ul>
      <b><a href='http://my.conduitecenter.fr/' rel="noopener noreferrer" target='_blank'>Voir le projet</a></b>
    </div>
  ),
};

const achievement_stroller = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/achievements%2Fstroller.png?alt=media&token=b7db5b3d-946b-42e5-9545-00546b2e2ae9",
  title: "Motorized Stroller",
  description: (
    <ul>
      <li>Création d&#39;une poussette motorisée qui n&#39;a pas besoin d&#39;être poussée</li>
      <li>La poussette suit son utilisateur automatiquement, sans contact, en se basant sur sa distance à celui-ci</li>
      <b>Techs:</b> Arduino, DC Motor, Ultrasonic
    </ul>
  ),
};

const achievement_tinspire = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/achievements%2Ftinspire.png?alt=media&token=7181a209-f9c7-4358-a290-9d5e93fcc95c",
  title: "Graphing Calculator Programs",
  description: (
    <div>
      <ul>
        <li>Développement de plusieurs logiociels pour la TI-Nspire - Une calculatrice graphique développée par Texas Instruments</li>
        <li>Programmes d&#39;aides en mathématiques et en physique</li>
        <li>Programmes crées pour aider les étudients pré-baccalauréat dans la résolution d&#39;exercices</li>
        <li>Près de 150.000 téléchargements</li>
        <b>Techs:</b> Calculatrice graphique TI-Nspire, TI-Basic language, Lua
      </ul>
      <b><a href='https://tiplanet.org/forum/archives_list.php?ref=12527&author=1&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BXRRzyBnmQuqsZYkehLA4Rw%3D%3D#files' rel="noopener noreferrer" target='_blank'>Voir le projet</a></b>
    </div>
  ),
};

export default {
  title: "Mon CV",
  view0: "Présentation",
  view1: "Compétences",
  view2: "Expériences",
  view3: "Projets",
  view4: "Formation",
  location: "Paris, France",
  mail: "david.el-malih@student.ecp.fr",
  phone: "(+33) 06 50 12 98 56",
  languageTitle: "Langues",
  fr: "Français - Langue natale",
  en: "Anglais - Compétences professionnelle complètes",
  is: "Hébreu - Compétences professionnelle limitées",
  ar: "Arabe - Notions",
  skills: {
    ml: "Data science / Machine Learning",
    webMobileDev: "Développement Web/Mobile",
    project: "Gestion de projet",
    softDev: "Développement logiciel",
    "IoT": "Compétences IoT",
  },
  experience: [
    work_yoobic,
    work_pdl,
    work_accorhotels,
    work_interimco,
    work_ratp,
    work_lsdj,
    work_cs,
    work_valeo,
    work_cc,
  ],
  achievements: [
    achievement_unsupervisedAnomalyDetection,
    achievement_recruitmentChatbot,
    achievement_iotDevice,
    achievement_lsdj,
    achievement_netflix,
    achievement_kaggle,
    achievement_simergy,
    achievement_netsim,
    achievement_conduitecenter,
    achievement_stroller,
    achievement_tinspire,
  ],
  education: [
    edu_centrale,
    edu_janson,
    edu_enh,
  ],
};