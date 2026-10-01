//primeiro numero = document.getElementById("numero1").value
//sinal           = document.getElementById("sinal").value
//segundo numero  = document.getElementById("numero2").value
//resultado       = document.getElementById("resultadoTotal").value

//---------------------------------------------------------------------------------------------------------------------
//Funções
const limp = () => { 
    document.getElementById("numero1").value="";
    document.getElementById("sinal").value="";
    document.getElementById("numero2").value="";
    document.getElementById("resultadoTotal").value="";
}

const delet = () => {
    if(document.getElementById("numero1").value && document.getElementById("sinal").value && document.getElementById("numero2").value){
        const tela2 = document.getElementById("numero2").value;
        const telaNova2 = tela2.slice(0,-1);
        document.getElementById("numero2").value=telaNova2;        
    } else if(document.getElementById("numero1").value && document.getElementById("sinal").value){
        const tela1 = document.getElementById("sinal").value;
        const telaNova1 = tela1.slice(0,-1);
        document.getElementById("sinal").value=telaNova1;
    } else if(document.getElementById("numero1").value){
        const tela = document.getElementById("numero1").value;
        const telaNova = tela.slice(0,-1);
        document.getElementById("numero1").value=telaNova;
    } else{
        document.getElementById("resultadoTotal").value="";
    }
}

const pontO = () => {
    if(document.getElementById("numero1").value && document.getElementById("numero2").value){
        document.getElementById("numero2").value = document.getElementById("numero2").value+".";    
    } else if(document.getElementById("numero1").value){
        document.getElementById("numero1").value = document.getElementById("numero1").value+".";
    }
}


//---------------------------------------------------------------------------------------------------------------------
//Números
const digitar9 = () => {
    if(document.getElementById("sinal").value==false){
        const c1 = document.getElementById("numero1").value;
        const c2 = 9
        document.getElementById("numero1").value=c1+c2;        
    }else{
        const c3 = document.getElementById("numero2").value;
        const c4 = 9
        document.getElementById("numero2").value=c3+c4;        
    }
}
const digitar8 = () => {
    if(document.getElementById("sinal").value==false){
        const b1 = document.getElementById("numero1").value;
        const b2 = 8
        document.getElementById("numero1").value=b1+b2;        
    }else{
        const b3 = document.getElementById("numero2").value;
        const b4 = 8
        document.getElementById("numero2").value=b3+b4;        
    }
}
const digitar7 = () => {
    if(document.getElementById("sinal").value==false){
        const a1 = document.getElementById("numero1").value;
        const a2 = 7
        document.getElementById("numero1").value=a1+a2;        
    }else{
        const a3 = document.getElementById("numero2").value;
        const a4 = 7
        document.getElementById("numero2").value=a3+a4;        
    }
}
const digitar6 = () => {
    if(document.getElementById("sinal").value==false){
        const d1 = document.getElementById("numero1").value;
        const d2 = 6
        document.getElementById("numero1").value=d1+d2;        
    }else{
        const d3 = document.getElementById("numero2").value;
        const d4 = 6
        document.getElementById("numero2").value=d3+d4;        
    }
}
const digitar5 = () => {
    if(document.getElementById("sinal").value==false){
        const e1 = document.getElementById("numero1").value;
        const e2 = 5
        document.getElementById("numero1").value=e1+e2;        
    }else{
        const e3 = document.getElementById("numero2").value;
        const e4 = 5
        document.getElementById("numero2").value=e3+e4;        
    }
}
const digitar4 = () => {
    if(document.getElementById("sinal").value==false){
        const f1 = document.getElementById("numero1").value;
        const f2 = 4
        document.getElementById("numero1").value=f1+f2;        
    }else{
        const f3 = document.getElementById("numero2").value;
        const f4 = 4
        document.getElementById("numero2").value=f3+f4;        
    }
}
const digitar3 = () => {
    if(document.getElementById("sinal").value==false){
        const g1 = document.getElementById("numero1").value;
        const g2 = 3
        document.getElementById("numero1").value=g1+g2;        
    }else{
        const g3 = document.getElementById("numero2").value;
        const g4 = 3
        document.getElementById("numero2").value=g3+g4;        
    }
}
const digitar2 = () => {
    if(document.getElementById("sinal").value==false){
        const h1 = document.getElementById("numero1").value;
        const h2 = 2
        document.getElementById("numero1").value=h1+h2;        
    }else{
        const h3 = document.getElementById("numero2").value;
        const h4 = 2
        document.getElementById("numero2").value=h3+h4;        
    }
}
const digitar1 = () => {
    if(document.getElementById("sinal").value==false){
        const i1 = document.getElementById("numero1").value;
        const i2 = 1
        document.getElementById("numero1").value=i1+i2;        
    }else{
        const i3 = document.getElementById("numero2").value;
        const i4 = 1
        document.getElementById("numero2").value=i3+i4;        
    }
}
const digitar0 = () => {
    if(document.getElementById("sinal").value==false){
        const j1 = document.getElementById("numero1").value;
        const j2 = 0
        document.getElementById("numero1").value=j1+j2;        
    }else{
        const j3 = document.getElementById("numero2").value;
        const j4 = 0
        document.getElementById("numero2").value=j3+j4;        
    }
}
//-----------------------------------------------------------------------------------------------------------------
//Sinais

const add = () => {

    if(document.getElementById("sinal").value==false){
        return document.getElementById("sinal").value = "+";
    }else if(document.getElementById("sinal").value=="+"){
        document.getElementById("resultadoTotal").value = Number(document.getElementById("numero1").value) + Number(document.getElementById("numero2").value);
        document.getElementById("numero1").value = document.getElementById("resultadoTotal").value
        document.getElementById("numero2").value = "";
        return document.getElementById("sinal").value = "+";
    }else if(document.getElementById("sinal").value=="-"){
        document.getElementById("resultadoTotal").value = Number(document.getElementById("numero1").value) - Number(document.getElementById("numero2").value);
        document.getElementById("numero1").value = document.getElementById("resultadoTotal").value
        document.getElementById("numero2").value = "";
        return document.getElementById("sinal").value = "+";
    }else if(document.getElementById("sinal").value=="÷"){
        document.getElementById("resultadoTotal").value = Number(document.getElementById("numero1").value) / Number(document.getElementById("numero2").value);
        document.getElementById("numero1").value = document.getElementById("resultadoTotal").value
        document.getElementById("numero2").value = "";
        return document.getElementById("sinal").value = "+";
    }else if(document.getElementById("sinal").value=="x"){
        document.getElementById("resultadoTotal").value = Number(document.getElementById("numero1").value) * Number(document.getElementById("numero2").value);
        document.getElementById("numero1").value = document.getElementById("resultadoTotal").value
        document.getElementById("numero2").value = "";
        return document.getElementById("sinal").value = "+";
    }else if(document.getElementById("sinal").value=="%"){
        document.getElementById("resultadoTotal").value = (Number(document.getElementById("numero1").value)/100) * Number(document.getElementById("numero2").value);
        document.getElementById("numero1").value = document.getElementById("resultadoTotal").value
        document.getElementById("numero2").value = "";
        return document.getElementById("sinal").value = "+";
    }    
}
const sub = () => {

    if(document.getElementById("sinal").value==false){
        return document.getElementById("sinal").value = "-";
    }else if(document.getElementById("sinal").value=="+"){
        document.getElementById("resultadoTotal").value = Number(document.getElementById("numero1").value) + Number(document.getElementById("numero2").value);
        document.getElementById("numero1").value = document.getElementById("resultadoTotal").value
        document.getElementById("numero2").value = "";
        return document.getElementById("sinal").value = "-";
    }else if(document.getElementById("sinal").value=="-"){
        document.getElementById("resultadoTotal").value = Number(document.getElementById("numero1").value) - Number(document.getElementById("numero2").value);
        document.getElementById("numero1").value = document.getElementById("resultadoTotal").value
        document.getElementById("numero2").value = "";
        return document.getElementById("sinal").value = "-";
    }else if(document.getElementById("sinal").value=="÷"){
        document.getElementById("resultadoTotal").value = Number(document.getElementById("numero1").value) / Number(document.getElementById("numero2").value);
        document.getElementById("numero1").value = document.getElementById("resultadoTotal").value
        document.getElementById("numero2").value = "";
        return document.getElementById("sinal").value = "-";
    }else if(document.getElementById("sinal").value=="x"){
        document.getElementById("resultadoTotal").value = Number(document.getElementById("numero1").value) * Number(document.getElementById("numero2").value);
        document.getElementById("numero1").value = document.getElementById("resultadoTotal").value
        document.getElementById("numero2").value = "";
        return document.getElementById("sinal").value = "-";
    }else if(document.getElementById("sinal").value=="%"){
        document.getElementById("resultadoTotal").value = (Number(document.getElementById("numero1").value)/100) * Number(document.getElementById("numero2").value);
        document.getElementById("numero1").value = document.getElementById("resultadoTotal").value
        document.getElementById("numero2").value = "";
        return document.getElementById("sinal").value = "-";
    }    
}

const mult = () => {

    if(document.getElementById("sinal").value==false){
        return document.getElementById("sinal").value = "x";
    }else if(document.getElementById("sinal").value=="+"){
        document.getElementById("resultadoTotal").value = Number(document.getElementById("numero1").value) + Number(document.getElementById("numero2").value);
        document.getElementById("numero1").value = document.getElementById("resultadoTotal").value
        document.getElementById("numero2").value = "";
        return document.getElementById("sinal").value = "x";
    }else if(document.getElementById("sinal").value=="-"){
        document.getElementById("resultadoTotal").value = Number(document.getElementById("numero1").value) - Number(document.getElementById("numero2").value);
        document.getElementById("numero1").value = document.getElementById("resultadoTotal").value
        document.getElementById("numero2").value = "";
        return document.getElementById("sinal").value = "x";
    }else if(document.getElementById("sinal").value=="÷"){
        document.getElementById("resultadoTotal").value = Number(document.getElementById("numero1").value) / Number(document.getElementById("numero2").value);
        document.getElementById("numero1").value = document.getElementById("resultadoTotal").value
        document.getElementById("numero2").value = "";
        return document.getElementById("sinal").value = "x";
    }else if(document.getElementById("sinal").value=="x"){
        document.getElementById("resultadoTotal").value = Number(document.getElementById("numero1").value) * Number(document.getElementById("numero2").value);
        document.getElementById("numero1").value = document.getElementById("resultadoTotal").value
        document.getElementById("numero2").value = "";
        return document.getElementById("sinal").value = "x";
    }else if(document.getElementById("sinal").value=="%"){
        document.getElementById("resultadoTotal").value = (Number(document.getElementById("numero1").value)/100) * Number(document.getElementById("numero2").value);
        document.getElementById("numero1").value = document.getElementById("resultadoTotal").value
        document.getElementById("numero2").value = "";
        return document.getElementById("sinal").value = "x";
    }    
}

const divi = () => {

    if(document.getElementById("sinal").value==false){
        return document.getElementById("sinal").value = "÷";
    }else if(document.getElementById("sinal").value=="+"){
        document.getElementById("resultadoTotal").value = Number(document.getElementById("numero1").value) + Number(document.getElementById("numero2").value);
        document.getElementById("numero1").value = document.getElementById("resultadoTotal").value
        document.getElementById("numero2").value = "";
        return document.getElementById("sinal").value = "÷";
    }else if(document.getElementById("sinal").value=="-"){
        document.getElementById("resultadoTotal").value = Number(document.getElementById("numero1").value) - Number(document.getElementById("numero2").value);
        document.getElementById("numero1").value = document.getElementById("resultadoTotal").value
        document.getElementById("numero2").value = "";
        return document.getElementById("sinal").value = "÷";
    }else if(document.getElementById("sinal").value=="÷"){
        document.getElementById("resultadoTotal").value = Number(document.getElementById("numero1").value) / Number(document.getElementById("numero2").value);
        document.getElementById("numero1").value = document.getElementById("resultadoTotal").value
        document.getElementById("numero2").value = "";
        return document.getElementById("sinal").value = "÷";
    }else if(document.getElementById("sinal").value=="x"){
        document.getElementById("resultadoTotal").value = Number(document.getElementById("numero1").value) * Number(document.getElementById("numero2").value);
        document.getElementById("numero1").value = document.getElementById("resultadoTotal").value
        document.getElementById("numero2").value = "";
        return document.getElementById("sinal").value = "÷";
    }else if(document.getElementById("sinal").value=="%"){
        document.getElementById("resultadoTotal").value = (Number(document.getElementById("numero1").value)/100) * Number(document.getElementById("numero2").value);
        document.getElementById("numero1").value = document.getElementById("resultadoTotal").value
        document.getElementById("numero2").value = "";
        return document.getElementById("sinal").value = "÷";
    }    
}

const porc = () => {
    if(document.getElementById("sinal").value==false){
        document.getElementById("sinal").value="%"
    }else if(document.getElementById("sinal").value=="+"){
        document.getElementById("resultadoTotal").value = Number(document.getElementById("numero1").value) + Number(document.getElementById("numero1").value)*(Number(document.getElementById("numero2").value)/100);
        document.getElementById("numero1").value = document.getElementById("resultadoTotal").value
        return document.getElementById("numero2").value = "";
    }else if(document.getElementById("sinal").value=="-"){
        document.getElementById("resultadoTotal").value = Number(document.getElementById("numero1").value) - Number(document.getElementById("numero1").value)*(Number(document.getElementById("numero2").value)/100);
        document.getElementById("numero1").value = document.getElementById("resultadoTotal").value
        return document.getElementById("numero2").value = "";
    }else if(document.getElementById("sinal").value=="÷"){
        document.getElementById("resultadoTotal").value = Number(document.getElementById("numero1").value) / Number(document.getElementById("numero1").value)*(Number(document.getElementById("numero2").value)/100);
        document.getElementById("numero1").value = document.getElementById("resultadoTotal").value
        return document.getElementById("numero2").value = "";
    }else if(document.getElementById("sinal").value=="x"){
        document.getElementById("resultadoTotal").value = Number(document.getElementById("numero1").value) * Number(document.getElementById("numero1").value)*(Number(document.getElementById("numero2").value)/100);
        document.getElementById("numero1").value = document.getElementById("resultadoTotal").value
        return document.getElementById("numero2").value = "";
    }else if(document.getElementById("sinal").value=="%"){
        document.getElementById("resultadoTotal").value = (Number(document.getElementById("numero1").value)/100) * Number(document.getElementById("numero2").value);
        document.getElementById("numero1").value = document.getElementById("resultadoTotal").value
        document.getElementById("numero2").value = "";
        return document.getElementById("sinal").value = "%";
    }
   
}


const iguaL = () => {
    if(document.getElementById("numero1").value==false || document.getElementById("numero2").value==false ||document.getElementById("sinal").value==false){
        alert("Calculo incompleto!")
    }else if(document.getElementById("sinal").value=="+"){
        document.getElementById("resultadoTotal").value = Number(document.getElementById("numero1").value) + Number(document.getElementById("numero2").value);
    }else if(document.getElementById("sinal").value=="-"){
        document.getElementById("resultadoTotal").value = Number(document.getElementById("numero1").value) - Number(document.getElementById("numero2").value);
    }else if(document.getElementById("sinal").value=="x"){
        document.getElementById("resultadoTotal").value = Number(document.getElementById("numero1").value) * Number(document.getElementById("numero2").value);
    }else if(document.getElementById("sinal").value=="÷"){
        document.getElementById("resultadoTotal").value = Number(document.getElementById("numero1").value) / Number(document.getElementById("numero2").value);
    }else if(document.getElementById("sinal").value=="%"){
        document.getElementById("resultadoTotal").value = (Number(document.getElementById("numero1").value)/100) * Number(document.getElementById("numero2").value);
    }

}
