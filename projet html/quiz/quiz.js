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
//red??marrer l'??cran de quiz apr??s avoir termin?? 
function restartScreen() {
    //on a utilis?? la propri??t?? innerHTML pour mettre ?? jour le contenu de quiz-heading avec une cha??ne de caract??res 
    document.querySelector('.quiz-heading').innerHTML = `Score : ${score}`
    const card = document.querySelector('.question-card');
    //innerHtml est utilis?? pour remplacer le contenu de l'??l??ment html avec une nouvelle balise <ul> qui sera utilis??e pour cr??er une liste non ordonn??e pour afficher les questions et les r??ponses.
    card.innerHTML = "<ul>";
    //parcourir toutes les questions dans le tableau avec forEach
    // ques.title pour le contenu du question et ques.options[ques.answer] pour la r??ponse correcte
    questions.forEach((ques) => {
        const html = `
        <li>${ques.title} <div class="answer-label">${ques.options[ques.answer]}</div></li>
        `;
        //on a utiliser l'operateur += pour ajouter le contenu de la variable html ?? la propri??t?? innerHTML de la variable card.
        card.innerHTML += html;
    });
    card.innerHTML += "</ul>";
    // display est une propri??t?? CSS qui d??termine comment un ??l??ment est affich??. Elle peut prendre plusieurs valeurs, comme "block", "inline", "none", etc.
    document.querySelector('.answer-key').style.display ='block';
    //querySelector pour s??lectionner un ??l??ment HTML de type "button"
    document.querySelector('button').style.display ='block';
}
//on a utiliser la fonction "resetradio" pour r??initialiser les boutons radio de ce formulaire.
function resetradio() {
    //querySelectorAll pour s??lectionner tous les ??l??ments HTML de type "radio" dans la page,  il s??lectionne tous les ??l??ments de type "radio" .
    document.querySelectorAll('[type="radio"]').forEach((radio) => {
        //la m??thode removeAttribute pour supprimer l'attribut "disabled"
        // L'attribut "disabled" permet de d??sactiver un bouton radio, en emp??chant l'utilisateur de le s??lectionner
        radio.removeAttribute("disabled");
    });
    //setAttribute d??finit la propri??t?? de classe de l'??l??ment HTML "res" en "idle
    // la classe "idle" sera ajout??e ?? l'??l??ment "res"
    res.setAttribute("class","idle");
    //innerHTML pour remplacer le contenu HTML de l'??l??ment HTML avec l'id "res" par la cha??ne "Empty".
    res.innerHTML = "Empty";
}
// on a ustiliser la fonction evaluate pour ??valuer les r??ponses d'un formulaire de quiz.
function evaluate() {
//1.on utilise une condition "if-else" pour v??rifier si la valeur de l'??l??ment de formulaire "op" est ??gale ?? la r??ponse correcte pour la question en cours (d??finie par questions[qno].answer)
    if(form.op.value == questions[qno].answer) {
        //2.setAttribute pour changer la propri??t?? de classe de l'??l??ment HTML "res" en "correct"
        res.setAttribute("class","correct");
        res.innerHTML = "Correct";
        //3.incr??menter la valeur du score de la question ?? la position sp??cifique (index qno) dans le tableau de questions
        score += questions[qno].score;

    } 
    else {
        ////4.setAttribute pour changer la propri??t?? de classe de l'??l??ment HTML "res" en "incorrect"
        res.setAttribute("class","incorrect");
        res.innerHTML = "Incorrect";
    }
    document.querySelectorAll('[type="radio"]').forEach((radio) => {
//l'attribut "disabled" pour d??sactiver les boutons radio apr??s que l'utilisateur ait soumis une r??ponse.
        radio.setAttribute("disabled","");
    })
}
//on utilise la fonction getNextQuestion pour naviguer ?? travers les questions d'un quiz, en affichant une question ?? la fois.
function getNextQuestion() {
    qno++;
    ques = questions[qno];
    // il prend l'??l??ment HTML ayant l'id "question" et change son contenu ?? la propri??t?? "title" de l'objet "ques" .
    // Ce qui permet d'afficher le titre de la question courante.
    question.innerHTML = ques.title;
    //s??lectionner tous les ??l??ments de la page ayant la balise "label" dans un tableau appel?? "labels".
    const labels = document.querySelectorAll('label');
    //la m??thode forEach() est utilis??e pour parcourir le tableau de labels et pour chaque label,
    //la methode prend deux arguments: l'??l??ment en cours de traitement dans le tableau (dans ce cas "label") et son index (dans ce cas "idx").
    labels.forEach((label, idx) => {
        // afficher les options de la question courante pour chaque label.
        label.innerHTML = ques.options[idx];
    }); 
}
//on utilise la fonction"handleSubmit" qui prend en entr??e un ??v??nement "e" (g??n??ralement un ??v??nement de soumission de formulaire).
//g??rer la transition entre la soumission de la r??ponse et la question suivante, en ??valuant la r??ponse, en changeant la valeur du bouton et en ajoutant/supprimant les classes.
function handleSubmit(e) {
    //la m??thode preventDefault()emp??cher l'action par d??faut de se produire.
    e.preventDefault();
//v??rifiant si la valeur de "form.op.value" est vide. Si c'est le cas, une alerte est affich??e pour indiquer ?? l'utilisateur de s??lectionner une option.
    if(!form.op.value) {
        alert('Please select an option');
    }
    else if(form.submit.classList.contains('submit')) {
        evaluate();
//la classe "submit" est supprim??e du bouton "submit" en utilisant la m??thode "remove()" de la propri??t?? "classList", la valeur du bouton est modifi??e en "Next"
        form.submit.classList.remove('submit');
        form.submit.value = "Next"
//la classe "next" est ajout??e au bouton "submit" en utilisant la m??thode "add()" 
        form.submit.classList.add('next');
    }
//v??rifie si le num??ro de question (qno) est inf??rieur ?? la longueur de la liste de questions (questions.length) et si le bouton de soumission (form.submit) contient la classe "next"
    else if(qno < questions.length - 1 && form.submit.classList.contains('next')) {
        //afficher la question suivante
        getNextQuestion();
        //r??initialiser les boutons radio et la classe "next" est enlev??e et remplac??e par "submit"
        resetradio();
        form.submit.classList.remove('next');
        form.submit.value = "Submit"
        form.submit.classList.add('submit');
        form.reset();
    }
    else if(form.submit.classList.contains('next')) {
//v??rifie si le bouton de soumission (form.submit) contient la classe "next". 
//Si c'est le cas, alors la fonction restartScreen() est appel??e pour red??marrer l'??cran,
// la classe "next" est enlev??e du bouton de soumission, la valeur du bouton de soumission est modifi??e pour dire "Soumettre" et la classe "submit" est ajout??e
        restartScreen();
        form.submit.classList.remove('next');
        form.submit.value = "Submit"
        form.submit.classList.add('submit');
//form.reset() c'est la fonction de r??initialisation de formulaire 
        form.reset();
    }
}
//la fonction "init()" est utilis??e pour initialiser et afficher le contenu de l'interface utilisateur pour le quiz
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
    //'question' pour s??lectionner l'??l??ment HTML avec l'id "question".
   question = document.querySelector('#question');
   // 'form' s??lectionner le premier formulaire dans le document.
   form = document.querySelector('form');
   // 'res' pour s??lectionner l'??l??ment HTML avec l'id "res".
   res = document.querySelector('#res');
   //initialiser qno ?? -1
   qno = -1;
   //initialiser le score ?? 0
   score = 0;
   // la fonction "handleSubmit" est appel?? lorsque le bouton de soumission est cliqu??
   form.addEventListener('submit', handleSubmit);
   //s??lectionner le bouton, puis en utilisant la m??thode "addEventListener" pour ajouter d'??v??nement "click"
   document.querySelector('button').addEventListener('click', init);
   getNextQuestion();
}
document.querySelector('button').addEventListener('click', init);
// appeler la fonction init () pour lancer le quiz.
init();


