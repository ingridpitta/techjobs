import React from "react";
import { CompanyInfos, RoleInfos } from "../";
import { Button } from "../../atoms";
import "./cardDetails.css";

const CardDetails = ({
  company,
  role,
  logo,
  position,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  onClick,
  key,
  id
}) => {
  return (
    <div className="cardDetails--container" key={id} id={`cardDetails--container--${id}`}>
      <div className="cardDetails--generalInfos">
        <CompanyInfos key={`cardDetails--companyInfos--${key}--key`} id={`cardDetails--companyInfos--${id}`} logo={logo} company={company} position={position} postedAt={postedAt} contract={contract} location={location} />
        <RoleInfos key={`cardDetails--roleInfos--${key}--key`} id={`cardDetails--roleInfos--${id}`}  role={role} level={level} languages={languages} tools={tools}/>
      </div>
      <div className="cardDetails--content">
        <h2>Sobre a vaga:</h2>
        <p>Voluptate do sit Lorem et ipsum esse ullamco amet dolor eu Lorem. Ex amet nulla ex ut ut reprehenderit eu. Elit adipisicing labore incididunt ullamco excepteur qui ipsum consectetur laborum occaecat adipisicing. Dolor eiusmod voluptate pariatur magna culpa commodo. Et sit ut sunt enim eu incididunt ullamco magna adipisicing anim ipsum nostrud aliquip officia. Ex nisi adipisicing deserunt sunt nostrud non enim velit do nulla. Magna pariatur culpa enim do dolore ea quis est et excepteur. Id ad reprehenderit excepteur aliquip deserunt eu nostrud excepteur anim voluptate et culpa commodo. Lorem ullamco dolor dolor cillum nulla. Do incididunt Lorem minim ad aute cillum enim culpa in et sit dolore quis velit. Adipisicing culpa veniam sit incididunt et cillum sint. Ipsum cillum officia fugiat aliqua minim ad enim Lorem aliqua non cupidatat deserunt ea. Mollit magna aute reprehenderit sint mollit labore proident dolore quis dolore id. Mollit in sint anim ea anim mollit non. Aliquip consectetur consequat Lorem qui occaecat pariatur cillum magna est commodo ea do sint duis. Aute nisi elit minim pariatur. Esse nulla do nulla eu culpa culpa minim. Ad reprehenderit ut sint magna sit consectetur. Do amet velit do culpa reprehenderit ullamco ipsum anim pariatur adipisicing nostrud labore duis tempor. Ex veniam culpa magna dolor id ea tempor sit.</p>
        <div className="cardDetails--btnContainer">
          <Button text="VOLTAR" className="cancel--btn" destination="/"/>
          <Button text="ENVIAR CV" className="confirm--btn" destination="/"/>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
