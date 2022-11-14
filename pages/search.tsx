import React from 'react';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { GetStaticProps } from 'next/types';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';

function Search({ menu } : HomeProps): JSX.Element {
    return (
        <>
            Search
        </>
    );
};

export default withLayout(Search);

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