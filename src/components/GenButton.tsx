import Button from 'react-bootstrap/Button'
import React from 'react'

interface GenButtonProp{

onClick: ()=> void;
className?:string;
text:string;
as?:(React.ElementType<any> & keyof JSX.IntrinsicElements);

};
const GenButton:React.FC<GenButtonProp> = ({onClick,className,text,as}:GenButtonProp)=>{

    return(


        <Button variant="outline-dark"  className={className} onClick={onClick} as={as}  >{text}</Button>


    );




}


export default GenButton;