import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    height=''
    weight=''
    bmiValue=''
    result=''

    inputHandler(event){
        const{name, value} = event.target
        if(name === 'height'){
            this.height = value            
        }
        if(name === 'weight'){
            this.weight = value
        }
    }

    // Submit handler method
    submitHandler(event){
        event.preventDefault() // To prevent sf from saving
        this.calculate()
    }

    // This method calculates the bmi based on the input
    calculate(){
        let height = Number(this.height)/100
        let bmi = Number(this.weight)/(height*height)
        this.bmiValue = Number(bmi.toFixed(2))

        if(this.bmiValue < 18.5){
            this.result = "Underweight"
        }else if(this.bmiValue >= 18.5 && this.bmiValue < 25){
            this.result = "Healthy"
        }else if(this.bmiValue >= 25 && this.bmiValue < 30){
            this.result = "Overweight"
        }else{
            this.result = "Obsese"
        }
    }

    // Recalculate method
    recalculate(){
        this.height=''
        this.weight=''
        this.bmiValue=''
        this.result=''
    }
}