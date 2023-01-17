let question;
let form;
let res;
let qno;
let score;

const questions = [
    {
        title : 'WWW stands for ?',
        options : [
            'World Whole Web', 
            'Wide World Web', 
            'Web World Wide', 
            'World Wide Web'
        ],
        answer : '3',
        score : 1
    },
    {
        title : 'Which of the following are components of Central Processing Unit (CPU) ?',
        options : [
            'Arithmetic logic unit, Mouse',
            'Arithmetic logic unit, Control unit',
            'Arithmetic logic unit, Integrated Circuits',
            'Control Unit, Monitor'
        ],
        answer : '1',
        score : 1
    },
    {
        title : 'Which among following first generation of computers had ?',
        options : [
            'Vaccum Tubes and Magnetic Drum',
            'Integrated Circuits',
            'Magnetic Tape and Transistors',
            'All of above'
        ],
        answer : '0',
        score : 1
    },
    {
        title : 'Where is RAM located ?',
        options : [
            'Expansion Board',
            'External Drive',
            'Mother Board',
            'All of above'
        ],
        answer : '2',
        score : 1
    },
    {
        title : 'If a computer has more than one processor then it is known as ?',
        options : [
            'Uniprocess',
            'Multiprocessor',
            'Multithreaded',
            'Multiprogramming'
        ],
        answer : '1',
        score : 1
    },
    {
        title : 'If a computer provides database services to other, then it will be known as ?',
        options : [
            'Web server',
            'Application server',
            'Database server',
            'FTP server'
        ],
        answer : '2',
        score : 1
    },
    {
        title : 'Full form of URL is ?',
        options : [
            'Uniform Resource Locator',
            'Uniform Resource Link',
            'Uniform Registered Link',
            'Unified Resource Link'
        ],
        answer : '0',
        score : 1
    },
    {
        title : 'In which of the following form, data is stored in computer ?',
        options : [
            'Decimal',
            'Binary',
            'HexaDecimal',
            'Octal'
        ],
        answer : '1',
        score : 1
    },
    {
        title : 'Which level language is Assembly Language ?',
        options : [
            'high-level programming language',
            'medium-level programming language',
            'low-level programming language',
            'machine language'
        ],
        answer : '2',
        score : 1
    },
    {
        title : 'Documents, Movies, Images and Photographs etc are stored at a ?',
        options : [
            'Application Sever',
            'Web Sever',
            'Print Server',
            'File Server'
        ],
        answer : '3',
        score : 1
    }
];
//redémarrer l'écran de quiz après avoir terminé 
function restartScreen() {
    //on a utilisé la propriété innerHTML pour mettre à jour le contenu de quiz-heading avec une chaîne de caractères 
    document.querySelector('.quiz-heading').innerHTML = `Score : ${score}`
    const card = document.querySelector('.question-card');
    //innerHtml est utilisé pour remplacer le contenu de l'élément html avec une nouvelle balise <ul> qui sera utilisée pour créer une liste non ordonnée pour afficher les questions et les réponses.
    card.innerHTML = "<ul>";
    //parcourir toutes les questions dans le tableau avec forEach
    // ques.title pour le contenu du question et ques.options[ques.answer] pour la réponse correcte
    questions.forEach((ques) => {
        const html = `
        <li>${ques.title} <div class="answer-label">${ques.options[ques.answer]}</div></li>
        `;
        //on a utiliser l'operateur += pour ajouter le contenu de la variable html à la propriété innerHTML de la variable card.
        card.innerHTML += html;
    });
    card.innerHTML += "</ul>";
    // display est une propriété CSS qui détermine comment un élément est affiché. Elle peut prendre plusieurs valeurs, comme "block", "inline", "none", etc.
    document.querySelector('.answer-key').style.display ='block';
    //querySelector pour sélectionner un élément HTML de type "button"
    document.querySelector('button').style.display ='block';
}
//on a utiliser la fonction "resetradio" pour réinitialiser les boutons radio de ce formulaire.
function resetradio() {
    //querySelectorAll pour sélectionner tous les éléments HTML de type "radio" dans la page,  il sélectionne tous les éléments de type "radio" .
    document.querySelectorAll('[type="radio"]').forEach((radio) => {
        //la méthode removeAttribute pour supprimer l'attribut "disabled"
        // L'attribut "disabled" permet de désactiver un bouton radio, en empêchant l'utilisateur de le sélectionner
        radio.removeAttribute("disabled");
    });
    //setAttribute définit la propriété de classe de l'élément HTML "res" en "idle
    // la classe "idle" sera ajoutée à l'élément "res"
    res.setAttribute("class","idle");
    //innerHTML pour remplacer le contenu HTML de l'élément HTML avec l'id "res" par la chaîne "Empty".
    res.innerHTML = "Empty";
}
// on a ustiliser la fonction evaluate pour évaluer les réponses d'un formulaire de quiz.
function evaluate() {
//1.on utilise une condition "if-else" pour vérifier si la valeur de l'élément de formulaire "op" est égale à la réponse correcte pour la question en cours (définie par questions[qno].answer)
    if(form.op.value == questions[qno].answer) {
        //2.setAttribute pour changer la propriété de classe de l'élément HTML "res" en "correct"
        res.setAttribute("class","correct");
        res.innerHTML = "Correct";
        //3.incrémenter la valeur du score de la question à la position spécifique (index qno) dans le tableau de questions
        score += questions[qno].score;

    } 
    else {
        ////4.setAttribute pour changer la propriété de classe de l'élément HTML "res" en "incorrect"
        res.setAttribute("class","incorrect");
        res.innerHTML = "Incorrect";
    }
    document.querySelectorAll('[type="radio"]').forEach((radio) => {
//l'attribut "disabled" pour désactiver les boutons radio après que l'utilisateur ait soumis une réponse.
        radio.setAttribute("disabled","");
    })
}
//on utilise la fonction getNextQuestion pour naviguer à travers les questions d'un quiz, en affichant une question à la fois.
function getNextQuestion() {
    qno++;
    ques = questions[qno];
    // il prend l'élément HTML ayant l'id "question" et change son contenu à la propriété "title" de l'objet "ques" .
    // Ce qui permet d'afficher le titre de la question courante.
    question.innerHTML = ques.title;
    //sélectionner tous les éléments de la page ayant la balise "label" dans un tableau appelé "labels".
    const labels = document.querySelectorAll('label');
    //la méthode forEach() est utilisée pour parcourir le tableau de labels et pour chaque label,
    //la methode prend deux arguments: l'élément en cours de traitement dans le tableau (dans ce cas "label") et son index (dans ce cas "idx").
    labels.forEach((label, idx) => {
        // afficher les options de la question courante pour chaque label.
        label.innerHTML = ques.options[idx];
    }); 
}
//on utilise la fonction"handleSubmit" qui prend en entrée un événement "e" (généralement un événement de soumission de formulaire).
//gérer la transition entre la soumission de la réponse et la question suivante, en évaluant la réponse, en changeant la valeur du bouton et en ajoutant/supprimant les classes.
function handleSubmit(e) {
    //la méthode preventDefault()empêcher l'action par défaut de se produire.
    e.preventDefault();
//vérifiant si la valeur de "form.op.value" est vide. Si c'est le cas, une alerte est affichée pour indiquer à l'utilisateur de sélectionner une option.
    if(!form.op.value) {
        alert('Please select an option');
    }
    else if(form.submit.classList.contains('submit')) {
        evaluate();
//la classe "submit" est supprimée du bouton "submit" en utilisant la méthode "remove()" de la propriété "classList", la valeur du bouton est modifiée en "Next"
        form.submit.classList.remove('submit');
        form.submit.value = "Next"
//la classe "next" est ajoutée au bouton "submit" en utilisant la méthode "add()" 
        form.submit.classList.add('next');
    }
//vérifie si le numéro de question (qno) est inférieur à la longueur de la liste de questions (questions.length) et si le bouton de soumission (form.submit) contient la classe "next"
    else if(qno < questions.length - 1 && form.submit.classList.contains('next')) {
        //afficher la question suivante
        getNextQuestion();
        //réinitialiser les boutons radio et la classe "next" est enlevée et remplacée par "submit"
        resetradio();
        form.submit.classList.remove('next');
        form.submit.value = "Submit"
        form.submit.classList.add('submit');
        form.reset();
    }
    else if(form.submit.classList.contains('next')) {
//vérifie si le bouton de soumission (form.submit) contient la classe "next". 
//Si c'est le cas, alors la fonction restartScreen() est appelée pour redémarrer l'écran,
// la classe "next" est enlevée du bouton de soumission, la valeur du bouton de soumission est modifiée pour dire "Soumettre" et la classe "submit" est ajoutée
        restartScreen();
        form.submit.classList.remove('next');
        form.submit.value = "Submit"
        form.submit.classList.add('submit');
//form.reset() c'est la fonction de réinitialisation de formulaire 
        form.reset();
    }
}
//la fonction "init()" est utilisée pour initialiser et afficher le contenu de l'interface utilisateur pour le quiz
function init() {
    document.body.innerHTML = `
        <h1 class="quiz-heading">Quiz</h1>
        <div class="app-body">
            <h1 class="answer-key">Answer Key</h1>
           
            <div class="question-card">
                <h2 id='question'>Question</h2>
                <form>
                    <input type="radio" id="op1" name="op" value="0">
                    <label for="op1">op1</label><br>
                    <input type="radio" id="op2" name="op" value="1">
                    <label for="op2">op2</label><br>
                    <input type="radio" id="op3" name="op" value="2">
                    <label for="op3">op3</label><br>
                    <input type="radio" id="op4" name="op" value="3">
                    <label for="op4">op4</label><br>
                    <div id = "res" class="idle">Empty</div><br>
                    <input type="submit" name="submit" value = 'Submit' class = "submit"/>
                </form>
            </div>
            
            <button>Restart</button>
        </div>
    `;
    //'question' pour sélectionner l'élément HTML avec l'id "question".
   question = document.querySelector('#question');
   // 'form' sélectionner le premier formulaire dans le document.
   form = document.querySelector('form');
   // 'res' pour sélectionner l'élément HTML avec l'id "res".
   res = document.querySelector('#res');
   //initialiser qno à -1
   qno = -1;
   //initialiser le score à 0
   score = 0;
   // la fonction "handleSubmit" est appelé lorsque le bouton de soumission est cliqué
   form.addEventListener('submit', handleSubmit);
   //sélectionner le bouton, puis en utilisant la méthode "addEventListener" pour ajouter d'événement "click"
   document.querySelector('button').addEventListener('click', init);
   getNextQuestion();
}
document.querySelector('button').addEventListener('click', init);
// appeler la fonction init () pour lancer le quiz.
init();


