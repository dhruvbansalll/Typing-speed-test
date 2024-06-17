function startMsg(){
    const randomParagraphs = [
    "The young man wanted a role model. He looked long and hard in his youth, but that role model never materialized. His only choice was to embrace all the people in his life he didn't want to be like.",
    "Eating raw fish didn't sound like a good idea. Its a delicacy in Japan didn't seem to make it any more appetizing. Raw fish is raw fish, delicacy or not.",
    "What were they eating? It didn't taste like anything she had ever eaten before and although she was famished, she didn't dare ask. She knew the answer would be one she didn't want to hear.",
    "Explain to me again why I shouldn't cheat? he asked. All the others do and nobody ever gets punished for doing so. I should go about being happy losing to cheaters because I know that I don't? That's what you're telling me?",
    "He couldn't move. His head throbbed and spun. He couldn't decide if it was the flu or the drinking last night. It was probably a combination of both.",
   "Things aren't going well at all with mom today. She is just a limp noodle and wants to sleep all the time. I sure hope that things get better soon.",
   "Things aren't going well at all with mom today. She is just a limp noodle and wants to sleep all the time. I sure hope that things get better soon.",
   "What was beyond the bend in the stream was unknown. Both were curious, but only one was brave enough to want to explore. That was the problem. There was always one that let fear rule her life.",
   "There wasn't a bird in the sky, but that was not what caught her attention. It was the clouds. The deep green that isn't the color of clouds, but came with these. She knew what was coming and she hoped she was prepared.",
   "Eating raw fish didn't sound like a good idea. It's a delicacy in Japan, didn't seem to make it any more appetizing. Raw fish is raw fish, delicacy or not.",
   "He had done everything right. There had been no mistakes throughout the entire process. It had been perfection and he knew it without a doubt, but the results still stared back at him with the fact that he had lost.",
   "She reached her goal, exhausted. Even more chilling to her was that the euphoria that she thought she'd feel upon reaching it wasn't there. Something wasn't right. Was this the only feeling she'd have for over five years of hard work?",
   "All he could think about was how it would all end. There was still a bit of uncertainty in the equation, but the basics were there for anyone to see. No matter how much he tried to see the positive, it wasn't anywhere to be seen. The end was coming and it wasn't going to be pretty.",
   "I'm going to hire professional help tomorrow. I can't handle this anymore. She fell over the coffee table and now there is blood in her catheter. This is much more than I ever signed up to do."
    ];
    let randomNumber = Math.floor(0+(100-(100-(randomParagraphs.length-0)))*Math.random());

    let msg = document.getElementById('msg');
    msg.innerText = randomParagraphs[randomNumber];

    timeStart = new Date().getTime();

    let typingField = document.getElementById('typingField');
    typingField.value = "";
}

function doneMsg(){
    let msg = document.getElementById('msg');
    let typingField = document.getElementById('typingField');

    let totalWordArr = msg.innerText.split(" ");
    let typedWordArr = typingField.value.split(" ");
    let correctWordCount=0;
    for(let i=0; i<typedWordArr.length; i++){
        if(totalWordArr[i]===typedWordArr[i]){
            correctWordCount++;
        }
    }

    timeEnd = new Date().getTime();
    totalTimeInSec = (timeEnd-timeStart)/1000;

    msg.innerHTML = `Your speed is <bold>${Math.round((correctWordCount/totalTimeInSec)*60)}</bold> words per minute. Accuracy is <strong>${Math.floor((correctWordCount/totalWordArr.length)*100)}%</strong>`;
}

let timeStart, timeEnd, totalTimeInSec;

const btn = document.getElementById('btn');
btn.addEventListener('click', ()=>{
    if(btn.innerText==='Start'){
        startMsg();
        btn.innerText="Done";
    }
    else if(btn.innerText==='Done'){
        doneMsg();
        btn.innerText="Start";
    }
});