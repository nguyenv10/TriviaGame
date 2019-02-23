var counter = 30; //30 sec
var interval=0;
var q_no = 0;
var correct=0;
var incorrect=0;
var total_questions = questions.length;

var question = $('#question-placeholder');
var ans1 = $('#ans1');
var ans2 = $('#ans2');
var ans3 = $('#ans3');
var ans4 = $('#ans4');


$('#play-again').hide();



$('#start').click(function(){


    $('#start').hide();

    load_question(0);




});

$('#play-again').click(function(){

    q_no=0;
    correct=0;
    incorrect=0;

    $('#play-again').hide();
    $('.result').hide();
    $('.questions').show();
    load_question(0);




});

$('.answer').click(function(){

    clearInterval(interval);

    var value = $(this).val();

    if(q_no < total_questions)
    {

        var q = questions[q_no];

        if(q.ans == value)
        {

            correct++;
            show_individual("Correct Answer");
        }
        else
        {
            var temp = questions[q_no];
            var temp2 ="";
            temp2 = temp.ans;
            var temp_ans="";


            if(temp2 == 1)
            {
                temp_ans = temp.ans1;
            }
            else if(temp2==2)
            {
                temp_ans = temp.ans2;
            }
            else if(temp2==3)
            {
                temp_ans = temp.ans3;
            }
            else if(temp2==4)
            {
                temp_ans = temp.ans4;
            }

            incorrect++;
            show_individual("In-correct Answer - Correct Answer Is : " + temp_ans);
        }

        q_no++;
        if(q_no >= total_questions)
        {
            result();
        }
        else
        {
            $('.questions').hide();
            $('.timer').hide();
            setTimeout(function(){
                $('.timer').show();
                $('.questions').show();
                $('#individual-result').hide();
                load_question(q_no);
            }, 3000);

        }

    }



});

function load_question(index)
{//load question

    counter=30;
    question_timer();

    var q = questions[index];

    question.text(q.question);
    ans1.text(q.ans1);
    ans2.text(q.ans2);
    ans3.text(q.ans3);
    ans4.text(q.ans4);

}//load question

function result()
{//result

    $('.result').show();
    $('#individual-result').hide();

    $('#timer-placeholder').html("");
    $('.questions').hide();
    $('#play-again').show();

    $('#correct').text("Correct Answers : " + correct);
    $('#incorrect').text("In-correct Answers : " + incorrect);

}//result


function show_individual(text)
{

    $('#individual-result').show();

    $('#individual-result').text(text);


}


function question_timer()
{//timer for question
    interval = setInterval(function(){



        if (counter == -1)
        {
            incorrect++;
            clearInterval(interval);

            q_no++;
            if(q_no >= total_questions)
            {

                result();

            }
            else
            {
                var temp = questions[q_no-1];
                var temp2 ="";
                temp2 = temp.ans;
                var temp_ans="";


                if(temp2 == 1)
                {
                    temp_ans = temp.ans1;
                }
                else if(temp2==2)
                {
                    temp_ans = temp.ans2;
                }
                else if(temp2==3)
                {
                    temp_ans = temp.ans3;
                }
                else if(temp2==4)
                {
                    temp_ans = temp.ans4;
                }


                show_individual("Time up - Correct Answer : " + temp_ans);

                $('.questions').hide();
                $('.timer').hide();
                setTimeout(function(){
                    $('.timer').show();
                    $('.questions').show();
                    $('#individual-result').hide();
                    load_question(q_no);
                }, 3000);
            }


        }
        else
        {
            $('#timer-placeholder').html("Time Remaning : " + counter+" Seconds");
            counter--;
        }


    }, 1000);
}//timer for question

