import { readFile } from 'fs/promises';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { join } from 'path';
import { cwd } from 'process';
import { FC } from 'react';
import { ListGroup, Stack } from 'react-bootstrap';
import { GitHub } from 'react-feather';
import YAML from 'yaml';

interface Project {
  iconSource?: string;
  icon: string;
  text: string;
  url: string;
  ghName: string;
}

interface ListItemProps extends Project {}

const ListItem: FC<ListItemProps> = ({ iconSource = 'devicon', icon, text, url, ghName }) => {
  return (
    <ListGroup horizontal>
        <ListGroup.Item action href={`https://${url}`} className="d-flex align-items-center">
          <Image
            src={`https://icongr.am/${iconSource}/${icon}.svg?size=24&color=ffffff`}
            width={24}
            height={24}
            alt={icon}
          />
          <span className="ms-3">{text}</span>
        </ListGroup.Item>
        <ListGroup.Item action href={`https://github.com/mjocc/${ghName}/`} style={{ flex: 1 }}>
          <GitHub className="ms-auto" />
        </ListGroup.Item>
    </ListGroup>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const path = join(cwd(), 'content/projects.yaml');
  const fileContents = await readFile(path, 'utf-8');
  const projects: Project[] = YAML.parse(fileContents);
  return {
    props: { projects },
  };
};

const Home: NextPage<{ projects: Project[] }> = ({ projects }) => {
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
        {projects.map(({ iconSource, icon, text, url, ghName }) => (
          <ListItem
            key={ghName}
            iconSource={iconSource}
            icon={icon}
            text={text}
            url={url}
            ghName={ghName}
          />
        ))}
      </Stack>
    </>
  );
};

export default Home;
