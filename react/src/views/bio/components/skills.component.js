// React
import React from 'react';
import PropTypes from 'prop-types';

// Style
import {
  Title,
  Content,
  Col,
  Logo,
} from '../styles/skills.style';

const Skills = props => (
  <div>
    <Title><b>{props.skills.ml}</b></Title>
    <Content>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Fpython.png?alt=media&token=59cf2160-297c-4692-b120-4b6f8f2a8cdb' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Fscikit.png?alt=media&token=95d3d3a0-74b8-407f-9ef5-a40897de283a' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Ftensorflow.png?alt=media&token=b25abd25-2748-4b7d-8d55-9bdddb402a7b' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Fkeras.png?alt=media&token=acf2afb4-890b-48c1-b3e5-09129002721a' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Fjupyter.png?alt=media&token=0897f802-5c1e-40b9-8108-db490cca7c76' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Fnumpy.png?alt=media&token=5c7a2864-8ce4-4894-aa90-afe89719f46d' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Fopencv.png?alt=media&token=678dd4f8-93f5-47a3-a041-2ea981f8e612' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Fdialogflow.png?alt=media&token=e902fa7d-2ac5-486a-ae73-65d6e43b432f' />
      </Col>
    </Content>
    <hr />
    <Title><b>{props.skills.webMobileDev}</b></Title>
    <Content>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Fhtml.png?alt=media&token=a26f0755-711b-44c7-84d1-d4bd50066efa' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Fcss.png?alt=media&token=d9d37295-cf94-4941-b2f3-5351e7ae5a0b' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Fjs.png?alt=media&token=f65b8a6a-a7c0-45e0-a6e4-40cbba48a3be' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Fjquery.png?alt=media&token=2ee981dc-4607-4dad-a999-a67b12c058d3' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Freact.png?alt=media&token=ecdd3962-8041-4151-8155-001ac0a259e0' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Freactnative.png?alt=media&token=f85119e0-99de-460f-8a75-00c9b16995a6' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Fsemantic.png?alt=media&token=41f803dc-72a6-49b1-9e65-6d89fbdabd39' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Fbootstrap.png?alt=media&token=80472246-b760-4d23-8874-fe2ac4f6635c' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Fmaterial.png?alt=media&token=79fc6c04-41c5-4c64-86f2-0002ecdec0f8' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Fnode.png?alt=media&token=9bc49494-3f61-4bc9-a281-f44543e5e6c7' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Fexpressjs.png?alt=media&token=eb7e29f2-67cb-487f-b757-5217d01379c0' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Fphp.png?alt=media&token=9df03852-dea4-48d3-a827-be9cd4bc1487' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Fflask.png?alt=media&token=e059dff8-5115-4575-acae-d8b07998147b' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Felasticsearch.png?alt=media&token=fb1df243-8ba6-412b-8e09-b010f3cb70af' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Ffirebase.png?alt=media&token=8b97fe2c-d4ca-4f7d-8f71-5c1fe51494eb' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Fmysql.jpg?alt=media&token=0644e9ba-2dce-4335-a06f-115cf8314b08' />
      </Col>
    </Content>
    <hr />
    <Title><b>{props.skills.project}</b></Title>
    <Content>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Fagile.png?alt=media&token=aef8f7b8-7178-4f26-bfa4-4c73ed78f2b8' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Fgit.png?alt=media&token=4a698c5f-509e-4231-8633-757077cdb458' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Fgithub.png?alt=media&token=0b93ad1a-9b82-45e5-83a6-41472fc17953' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Ftrello.png?alt=media&token=801e9850-f012-4571-a875-9dfd3376af93' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Fdocker.png?alt=media&token=e20828f2-6af8-4b8f-b6b0-f0cbf9be292f' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Fgcloud.png?alt=media&token=b900d546-9109-4989-993c-dd59fb81a42a' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Faws.png?alt=media&token=fcdac1c3-0f31-4fd1-8b80-e0a8500dadd1' />
      </Col>
    </Content>
    <hr />
    <Title><b>{props.skills.softDev}</b></Title>
    <Content>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Fpython.png?alt=media&token=59cf2160-297c-4692-b120-4b6f8f2a8cdb' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Fjava.png?alt=media&token=06f7b565-dce1-4284-bbe6-8ee186ac224e' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Fc.png?alt=media&token=8619f6d3-c768-4fb8-8503-256c0e85de9d' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Flua.png?alt=media&token=709376b9-343f-4082-992b-a1377ef43e2d' />
      </Col>
    </Content>
    <hr />
    <Title><b>{props.skills.IoT}</b></Title>
    <Content>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Farduino.png?alt=media&token=84c6311d-32f0-425d-8885-c553dbd3032b' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Flora.png?alt=media&token=14a4b1dc-ccad-44a5-a8ea-5bfe98d5ac6f' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Frfid.png?alt=media&token=4cde141d-3922-46b2-a4b9-a634d4d63e7c' />
      </Col>
      <Col lg={3} md={6}>
        <Logo src='https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/skills%2Fnfc.png?alt=media&token=09b29619-4fc1-4273-bde6-283e160e2654' />
      </Col>
    </Content>
  </div>
);

Skills.propTypes = {
  skills: PropTypes.node,
};

export default Skills;