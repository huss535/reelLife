import Button from 'react-bootstrap/Button'
import React from 'react'

interface GenButtonProp{

onClick?: ()=> void;
className?:string;
id?:any;
value?:any;
text:string;
type?:any;
as?:(React.ElementType<any> & keyof JSX.IntrinsicElements);

};
const GenButton:React.FC<GenButtonProp> = ({onClick,className,text,as,type,id,value}:GenButtonProp)=>{

    return(


        <Button variant="outline-dark" id={id} value={value} className={className} onClick={onClick} as={as} type={type} >{text}</Button>


    );




}


export default GenButton;