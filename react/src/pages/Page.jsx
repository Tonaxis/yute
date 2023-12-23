import React, { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import PageContent from '../components/page/PageContent';

export default function Page() {
  const { url } = useParams()
  const [page, setPage] = useState();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = process.env.REACT_APP_STRAPI_API_BASE_URL;
        const route = '/api/pages';
        const query = [
          `filters[url][$eq]=${url}`,
          `populate[content][populate]=*`,
          `populate[images][populate]=*`,
        ].join('&');
        const response = await axios.get(`${baseUrl}${route}?${query}`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_STRAPI_API_KEY}`,
          },
        });
        setPage(response.data.data[0].attributes);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setInitialized(true);
      }
    };

    fetchData();
  }, [url]);

  if (!initialized) {
    return <div>Loading...</div>;
  } else if (!page) {
    return <div>Page not found</div>;
  } else {
    return <PageContent page={page} />;
  }
}
