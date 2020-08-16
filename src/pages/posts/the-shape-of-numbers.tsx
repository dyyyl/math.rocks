import Latex from 'react-latex';
import { NextPage } from 'next';
import React from 'react';

import { Copy, Title } from 'shared/components/Typography';

import ArticleGrid from 'shared/layout/grids/ArticleGrid';

const ShapeOfNumbersPost: NextPage = () => {
  const [a, b] = [5, 6];

  const fraction = `$$\\frac{${a}}{${b}} \\times \\frac{4}{11} = \\bar s$$`;

  const sigma = `$$\\sum_{k=1}^\\infty 4n$$`;

  const quadratic = `$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$`;

  const trinomial = `$$ax^2 + bx + c = 0$$`;

  return (
    <ArticleGrid>
      <Title>Learning about the shape of numbers</Title>

      <section>
        <Copy>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo saepe
          tempore dignissimos ullam earum voluptates doloremque porro eaque.
          Nemo rem harum voluptas tempora. Non nesciunt quod cum nemo natus
          repellendus?
        </Copy>
      </section>

      <section>
        <Copy>
          <Latex displayMode>$$(3\times 4) \div (5-3)^2 = ?$$</Latex>
        </Copy>
      </section>

      <section>
        <Copy>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo saepe
          tempore dignissimos ullam earum voluptates doloremque porro eaque.
          Nemo rem harum voluptas tempora. Non nesciunt quod cum nemo natus
          repellendus?
        </Copy>
      </section>

      <section>
        <Copy>
          <Latex displayMode>{fraction}</Latex>
        </Copy>
      </section>

      <section>
        <Copy>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo saepe
          tempore dignissimos ullam earum voluptates doloremque porro eaque.
          Nemo rem harum voluptas tempora. Non nesciunt quod cum nemo natus
          repellendus?
        </Copy>
      </section>

      <section>
        <Copy>
          <Latex displayMode>{sigma}</Latex>
        </Copy>
      </section>

      <section>
        <Copy>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo saepe
          tempore dignissimos ullam earum voluptates doloremque porro eaque.
          Nemo rem harum voluptas tempora. Non nesciunt quod cum nemo natus
          repellendus?
        </Copy>
      </section>

      <section>
        <Copy>
          <Latex displayMode>{quadratic}</Latex>
        </Copy>
      </section>

      <section>
        <Copy>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo saepe
          tempore dignissimos ullam earum voluptates doloremque porro eaque.
          Nemo rem harum voluptas tempora. Non nesciunt quod cum nemo natus
          repellendus?
        </Copy>
      </section>

      <section>
        <Copy>
          <Latex displayMode>{trinomial}</Latex>
        </Copy>
      </section>

      <section>
        <Copy>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo saepe
          tempore dignissimos ullam earum voluptates doloremque porro eaque.
          Nemo rem harum voluptas tempora. Non nesciunt quod cum nemo natus
          repellendus?
        </Copy>
      </section>

      <Copy>
        <Latex displayMode>{quadratic}</Latex>
        <span style={{ textAlign: 'center', display: 'block' }}>
          <small style={{ fontSize: '1.25rem', lineHeight: '2rem' }}>
            when
          </small>
        </span>
        <Latex displayMode>{trinomial}</Latex>
      </Copy>

      <section>
        <Copy>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo saepe
          tempore dignissimos ullam earum voluptates doloremque porro eaque.
          Nemo rem harum voluptas tempora. Non nesciunt quod cum nemo natus
          repellendus?
        </Copy>
      </section>
    </ArticleGrid>
  );
};

export default ShapeOfNumbersPost;
