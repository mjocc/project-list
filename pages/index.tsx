import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FC, useState } from 'react';
import { ListGroup, Stack } from 'react-bootstrap';
import { GitHub } from 'react-feather';
import Toast from '../components/Toast';
import projects from '../content/projects';

export type Project = {
  text: string;
  ghName?: string;
} & (
  | {
      icon: string;
      iconUrl?: undefined;
      iconSource?: string;
    }
  | {
      icon?: undefined;
      iconUrl: string;
      iconSource?: undefined;
    }
) &
  ({ toast: string; url?: undefined } | { toast?: undefined; url: string });

const ListItem: FC<Project> = ({
  iconSource = 'devicon',
  icon,
  iconUrl,
  text,
  url,
  toast,
  ghName,
}) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <ListGroup horizontal>
        <ListGroup.Item
          action
          href={url ? `https://${url}` : undefined}
          onClick={toast ? () => setShow(true) : undefined}
          className="d-flex align-items-center"
        >
          <>
            <Image
              src={
                iconUrl
                  ? iconUrl
                  : `https://icongr.am/${iconSource}/${icon}.svg?size=24&color=ffffff`
              }
              width={24}
              height={24}
              alt={icon}
            />
            <span className="ms-3">{text}</span>
          </>
        </ListGroup.Item>
        <ListGroup.Item
          action
          href={ghName ? `https://github.com/mjocc/${ghName}/` : undefined}
          style={{ flex: 1 }}
          disabled={!ghName}
        >
          <GitHub className="ms-auto" />
        </ListGroup.Item>
      </ListGroup>
      {toast && <Toast text={toast} show={show} setShow={setShow} />}
    </>
  );
};

const Home: NextPage<{ projects: Project[] }> = () => {
  return (
    <>
      <Head>
        <title>Projects list | mjocc</title>
      </Head>
      <Stack direction="horizontal" className="mb-3">
        <h1 className="display-1 inter-header">Projects</h1>
        <a className="ms-auto" href="https://github.com/mjocc/">
          <GitHub size={50} />
        </a>
      </Stack>
      <Stack className="inter-regular">
        {projects.map((project) => (
          <ListItem key={project.text + project.ghName} {...project} />
        ))}
      </Stack>
    </>
  );
};

export default Home;
