import Latex from 'react-latex';
import { NextPage } from 'next';
import React from 'react';

import { Copy, Title } from 'shared/components/Typography';
import ArticleGrid from 'shared/layout/grids/ArticleGrid';

const DerivativeNotationPost: NextPage = () => {
  return (
    <ArticleGrid>
      <Title>On Derivative Notation</Title>
      <Copy>
        When working with single variable calculus,{' '}
        <Latex>{`$$\\frac{d}{dx}$$`}</Latex> is an operator that applies a
        derivative to a single variable function with respect to{' '}
        <Latex>x</Latex> (which is usually the independent variable). This works
        with any single variable function, such as a position function in
        classical mechanics which uses <Latex>t</Latex> (time) as its
        independent variable that outputs a value for <Latex>x</Latex>. In this
        case, the derivative operator that is applied to the function then
        becomes <Latex>{`$$\\frac{d}{dt}$$`}</Latex>, because the independent
        variable is <Latex>t</Latex>.
      </Copy>

      <Copy>
        With this in mind, one should treat <Latex>{`$$\\frac{d}{dx}$$`}</Latex>{' '}
        and similar derivative operators as a notational trick which allows us
        to keep track of what variables the derivative operator is being applied
        to.
      </Copy>

      <Copy centered>
        For example, if we apply the derivative operator{' '}
        <Latex>{`$$\\frac{d}{dx}$$`}</Latex> to the both sides of the equation{' '}
        <Latex>{`$$y = x^2$$`}</Latex>, we get{' '}
        <Latex displayMode>{`$$\\frac{d}{dx} \\times y = 2x$$`}</Latex>
        <span style={{ textAlign: 'center', display: 'block' }}>
          <small style={{ fontSize: '1.25rem', lineHeight: '2rem' }}>
            or, simply
          </small>
        </span>
        <Latex displayMode>{`$$\\frac{dy}{dx} = 2x$$`}</Latex>
        In this case, we have <Latex>{`$$\\frac{dy}{dx}$$`}</Latex> because it
        is the derivative of <Latex>y</Latex> with respect to <Latex>x</Latex>.
      </Copy>

      <Copy>
        It&apos;s noteworth here that if you have a function such as{' '}
        <Latex>{`$$y = f(x)$$`}</Latex>, then the derivative is expressed as{' '}
        <Latex>{`$$\\frac{dy}{dx} = f'(x)$$`}</Latex> (Lagrange&apos;s notation)
        and not <Latex>{`$$\\frac{dy}{dx} = f(x)$$`}</Latex> (Liebniz&apos;s
        notation). This is a notational difference only; they mean the same
        thing.
      </Copy>
      <Copy>
        - <Latex>{`$$\\Delta$$`}</Latex>
      </Copy>
    </ArticleGrid>
  );
};

export default DerivativeNotationPost;
