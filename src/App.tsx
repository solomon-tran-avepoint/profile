import {
  BookOutlined,
  CodeOutlined,
  DatabaseOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  TrophyOutlined
} from '@ant-design/icons';
import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  Layout,
  List,
  Progress,
  Row,
  Space,
  Tag,
  Timeline,
  Typography
} from 'antd';
import './App.css';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

function App() {
  const skills = [
    { name: 'C#', level: 95 },
    { name: '.NET Core/Framework', level: 90 },
    { name: 'ASP.NET', level: 88 },
    { name: 'SQL Server', level: 85 },
    { name: 'Entity Framework', level: 82 },
    { name: 'Azure', level: 78 },
    { name: 'JavaScript/TypeScript', level: 75 },
    { name: 'React', level: 70 }
  ];

  const projects = [
    {
      title: 'Element',
      description: 'A IT service platform using .NET Core, microservices architecture, and Azure cloud services.',
      technologies: ['ASP .NET Core Web API', 'Azure', 'SQL Server', 'ADO .NET', 'ElasticSearch']
    },
    {
      title: 'Ydentic',
      description: 'A IT service platform using .NET Core, microservices architecture, and Azure cloud services.',
      technologies: ['ASP.NET Web MVC 4', 'SignalR', 'Entity Framework', 'React']
    },
  ];

  const timeline = [
    {
      children: (
        <div>
          <Title level={5}>Junior .NET Developer</Title>
          <Text type="secondary">AvePoint Inc. (2024 - Present)</Text>
          <Paragraph>
            Leading development of enterprise applications using .NET Core and Azure cloud services.
            Mentoring junior developers.
          </Paragraph>
        </div>
      ),
    },
    {
      children: (
        <div>
          <Title level={5}>Junior .NET Developer</Title>
          <Text type="secondary">ST Software (2023 - 2024)</Text>
          <Paragraph>
            Developed web applications using ASP.NET Core, implemented RESTful APIs,
            and optimized database performance with Entity Framework.
          </Paragraph>
        </div>
      ),
    },
  ];

  return (
    <Layout className="layout">
      <Header className="header">
        <div className="header-content">
          <Title level={3} style={{ color: 'white', margin: 0 }}>
            <CodeOutlined /> Solomon Tran - .NET Developer
          </Title>
        </div>
      </Header>

      <Content className="content">
        {/* Hero Section */}
        <div className="hero-section">
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} md={8} style={{ textAlign: 'center' }}>
             <Avatar size={200} src="/images/avatar.jpg" className="profile-avatar" />
            </Col>
            <Col xs={24} md={16}>
              <Title level={1} className="hero-title">
                Passionate .NET Developer
              </Title>
              <Title level={3} type="secondary" className="hero-subtitle">
                Building Scalable Enterprise Solutions
              </Title>
              <Paragraph className="hero-description">
                Experienced .NET developer with 2+ years of expertise in creating robust,
                scalable applications using C#, ASP.NET Core, and Azure cloud services.
                Passionate about clean code, modern architectures, and continuous learning.
              </Paragraph>
              <Space size="large">
                <Button type="primary" size="large" icon={<MailOutlined />}>
                  Contact Me
                </Button>
                <Button size="large" icon={<GithubOutlined />}>
                  GitHub
                </Button>
                <Button size="large" icon={<LinkedinOutlined />}>
                  LinkedIn
                </Button>
              </Space>
            </Col>
          </Row>
        </div>

        <Divider />

        {/* Skills Section */}
        <div className="section">
          <Title level={2} className="section-title">
            <TrophyOutlined /> Technical Skills
          </Title>
          <Row gutter={[24, 24]}>
            {skills.map((skill, index) => (
              <Col xs={24} sm={12} md={8} lg={6} key={index}>
                <Card className="skill-card">
                  <Title level={5}>{skill.name}</Title>
                  <Progress
                    percent={skill.level}
                    strokeColor={{
                      '0%': '#108ee9',
                      '100%': '#87d068',
                    }}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <Divider />

        {/* Technologies Section */}
        <div className="section">
          <Title level={2} className="section-title">
            <CodeOutlined /> Technology Stack
          </Title>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <Card title="Backend Development" className="tech-card">
                <Space wrap>
                  <Tag color="purple">C#</Tag>
                  <Tag color="purple">.NET Core</Tag>
                  <Tag color="purple">ASP.NET</Tag>
                  <Tag color="purple">Web API</Tag>
                  <Tag color="purple">Microsoft Graph API</Tag>
                  <Tag color="purple">ADO.NET</Tag>
                  <Tag color="purple">Entity Framework</Tag>
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card title="Database & Cloud" className="tech-card">
                <Space wrap>
                  <Tag color="green">SQL Server</Tag>
                  <Tag color="green">Azure SQL</Tag>
                  <Tag color="green">Redis</Tag>
                  <Tag color="orange">Azure</Tag>
                  <Tag color="orange">Docker</Tag>
                  <Tag color="orange">Kubernetes</Tag>
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card title="Frontend & Tools" className="tech-card">
                <Space wrap>
                  <Tag color="purple">React</Tag>
                  <Tag color="purple">TypeScript</Tag>
                  <Tag color="purple">JavaScript</Tag>
                  <Tag color="gold">Git</Tag>
                  <Tag color="gold">Azure DevOps</Tag>
                  <Tag color="gold">Visual Studio</Tag>
                </Space>
              </Card>
            </Col>
          </Row>
        </div>

        <Divider />

        {/* Projects Section */}
        <div className="section">
          <Title level={2} className="section-title">
            <BookOutlined /> Featured Projects
          </Title>
          <List
            grid={{ gutter: 24, xs: 1, sm: 1, md: 2, lg: 3, xl: 3 }}
            dataSource={projects}
            renderItem={(project) => (
              <List.Item>
                <Card
                  title={project.title}
                  className="project-card"
                  actions={[
                    <Button type="link" icon={<GithubOutlined />}>
                      View Code
                    </Button>
                  ]}
                >
                  <Paragraph>{project.description}</Paragraph>
                  <Space wrap>
                    {project.technologies.map((tech, index) => (
                      <Tag key={index} color="processing">{tech}</Tag>
                    ))}
                  </Space>
                </Card>
              </List.Item>
            )}
          />
        </div>

        <Divider />

        {/* Experience Timeline */}
        <div className="section">
          <Title level={2} className="section-title">
            <DatabaseOutlined /> Professional Experience
          </Title>
          <Timeline mode="left" items={timeline} />
        </div>
      </Content>

      <Footer className="footer">
        <div style={{ textAlign: 'center' }}>
          <Text type="secondary">
            © 2025 Your Name. Built with React + TypeScript + Ant Design
          </Text>
        </div>
      </Footer>
    </Layout>
  );
}

export default App;
