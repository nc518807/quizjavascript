const quizDB = [
    {
        question: "Q1: what is the full form of HTML?",
        a:"hello to my land.",
        b:"HeyText Markup Language.",
        c: "HyperText make up language.",
        d:"HyperText Markup Language.",
        ans:"ans4"
    },
    {
        question:"Q2: what is the fullform of CSS?",
        a:"Cascading stylesheet.",
        b:"cascading style sheep",
        c:"cartoon stylesheet",
        d:"cascading supersheet",
        ans:"ans1"
    },
    {
        question:"Q3: what is the full form of HTTP?",
        a:"hypertext transfer product",
        b:"hypertext test protocol",
        c:"hey transfer protocol",
        d:"hypertext transfer protocol",
        ans:"ans4"
    },
    {
    question:"Q4: what is the fullform of js ?",
        a:"javascript",
        b:"javasuper",
        c:"justscript",
        d:"jordenshoes",
        ans:"ans1"
    
    }
    
    ];

    const question = document.querySelector('.question');
    const option1 =document.querySelector('#option1');
    const option2 =document.querySelector('#option2');
    const option3 =document.querySelector('#option3');
    const option4 =document.querySelector('#option4');
    const submit = document.querySelector('#submit');
   const answers = document.querySelectorAll('.answer');
   const showscore = document.querySelector('#showscore');
    let questionCount=0;
    let score = 0;
    const loadQuestion = ()=>{
        const questionList = quizDB[questionCount];
        question.innerHTML= questionList.question;
       // console.log(quizDB[0].question); 
        option1.innerHTML = questionList.a;
        option2.innerHTML = questionList.b;
        option3.innerHTML = questionList.c;
        option4.innerHTML = questionList.d;
    }
 
    loadQuestion();
    const getcheckedAnswer = ()=>{
        let answer;
        answers.forEach((curAnsElem)=>{
            if(curAnsElem.checked){
                answer = curAnsElem.id;
            }
            
        });
        return answer;
    }

    submit.addEventListener('click',()=>{

        const checkedAnswer = getcheckedAnswer();
        console.log(checkedAnswer);
        if(checkedAnswer == quizDB[questionCount].ans){
            score++;
        }
        questionCount++;
         if(questionCount<quizDB.length){
            loadQuestion();
         }
         else{
             showscore.innerHTML= `
             <h3> you scored ${score}/${quizDB.length}</h3>
             <button class="btn" onclick="location.reload()">play Again</button>
             `;
             showscore.classList.remove('scoreArea');

         }


    });


