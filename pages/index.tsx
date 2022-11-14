import React, { useEffect, useState } from 'react';
import { Button, Htag, Input, P, Rating, Tag, Textarea } from '../components';
import { Layout, withLayout } from '../layout/Layout';
import axios from 'axios';
import { GetStaticProps } from 'next/types';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';

function Home({ menu } : HomeProps): JSX.Element {
  const[rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag='h1'>Header</Htag>
      <Button appearance='ghost'>Button</Button>
      <P size='s'>Hello My Friend</P>
      <P>I am a middle one</P>
      <P size='l'>I am a big</P>
      <Tag size='s'>Small</Tag>
      <Tag size='m' color ='red'>Red</Tag>
      <Tag size='m' color ='green'>Green</Tag>
      <Tag size='m' color ='primary'>Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder='test'/>
      <Textarea placeholder='test'/>
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  }
};

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[];
  firstCategory: number;
}