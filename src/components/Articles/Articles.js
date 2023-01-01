import React, { useEffect, useState } from 'react';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ArticleStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `https://dev.to/api/articles?username=johannesmogashoa`
        );
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchArticles();
  }, []);
  return (
    <Section nopadding id="articles">
      <SectionDivider />
      <SectionTitle main>Articles</SectionTitle>
      <GridContainer>
        {articles.map((article) => {
          return (
            <BlogCard key={article.id}>
              <Img src={article.cover_image ?? article.social_image} />
              <TitleContent>
                <HeaderThree title="true">{article.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">{article.description}</CardInfo>
              <div>
                <TitleContent>Tags</TitleContent>
                <TagList>
                  {article.tag_list.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={article.url}>Read</ExternalLinks>
              </UtilityList>
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
  );
};

export default Articles;
