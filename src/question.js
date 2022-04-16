import questions from './questionsData'
import QuestionList from './questionList'
const Questions = () => {
    return ( 
        <div className="questions_sec">
            <div className="qestion_container">
                <div className="question_bio"><h1>Questions And Awnsers About Login</h1></div>
                <div className="question_box">
                    {questions.map((question)=>{
                        return <QuestionList key={question.id}  {... question}/>

                    })}
                </div>


            </div>


        </div>
     );
}
 
export default Questions;