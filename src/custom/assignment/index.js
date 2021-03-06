import React from 'react';

import './styles.css';

class Assignment extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentIndex: 0,
            questions: props.questions,
            cummulativeScore: 0,
            currentAnswer: '',
        };
    }
    handleAnswer = (event) => {
        this.setState({ currentAnswer : event.target.value });
      }

    updateCurrentIndex = () => {
        let { currentIndex, questions, currentAnswer, cummulativeScore } = this.state;
        // handle answer here 
        const question = questions[currentIndex];
        const correctAnswer = question.answer;
        if(correctAnswer === currentAnswer) {
            // accumulate it here
            console.log('passed');
        } else {
            console.log('Failed');
        }
        
        // add to the accumlative answer
        if(currentIndex + 1 < questions.length ) {
            currentIndex += 1;
            this.setState({ currentIndex });
            // compare current answer and store
        } else {
            //  add up the answer
            alert('submit answer');
            // display result and go back to dashboard
        }
       
    }


    render() {
        const { questions, currentIndex, index, length } = this.state;
        return (
                    <>
                    {questions.map((q, index) => 
                    (index === currentIndex) ?
                    <div className="container">
                        <div className="row">
                            <div className="col-md-offset-3 col-md-8 col-content">
                                <h4> Assignemnt on The New Birth </h4>
                                <br/>
                                <div className="panel panel-default padding">
                                    {q.question}
                                </div>
                            
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="col-md-12 radio">
                                            <label className="radio-inline">
                                                <input type="radio" className="radio" name="t3" onChange={this.handleAnswer} value="optionA"  /> 
                                            {q.optionA}
                                            </label>
                                        </div>
                                        <div className="col-md-12 radio">
                                            <label className="radio-inline">
                                                <input type="radio" className="radio" name="t3" onChange={this.handleAnswer} value="optionB" /> 
                                            {q.optionB}
                                            </label>  
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="col-md-12 radio">
                                        <label className="radio-inline">
                                            <input type="radio" className="radio" name="t3" onChange={this.handleAnswer} value="optionC" /> 
                                            {q.optionC}
                                        </label>
                                    </div>
                                    <div className="col-md-12 radio">
                                        <label className="radio-inline">
                                            <input type="radio" className="radio" name="t3" onChange={this.handleAnswer} value="optionD" /> 
                                            {q.optionD}
                                        </label>  
                                    </div>
                                </div>
                            
                            </div>
                            <button className="btn btn-primary" onClick={() => this.updateCurrentIndex()}> {(index + 1)  === questions.length ? 'Finish' : 'Next -->' } </button>
                        </div>
                    </div>
                </div>
                : ''
                )}
            </>
        );
        }
    }


export default Assignment;