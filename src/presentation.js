import React, { useState, useEffect, useContext } from 'react';

import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Quote,
  Slide,
  Text,
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

import {
  searchBox_class_string_ref,
  searchBox_class_callback_ref,
  searchBox_class_instance_ref,
  searchBox_func_hook_ref,
  searchBox_func_custom_hooks,
  useFocusOnMount_customHook,
  theme_legacyContext,
  theme_renderPropsContext,
  theme_hookContext,
  componentHookExpression,
  seen_classState,
  seen_hookState,
  errorBoundary_hook,
  dynamicContext_hook,
  functional_errorBoundry,
  errorBoundry_renderProps,
  vipContent_usingAuth,
  method_side_effects,
  hook_side_effects,
  hook_redux
} from './snippets';

require('normalize.css');
require('./overrides.css');
require('prismjs/themes/prism-coy.css');

const theme = createTheme(
  {
    primary: '#f0f0f0',
    secondary: 'black',
    tertiary: 'black',
    quaternary: 'black',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (<React.Fragment>
      <Deck
        transition={['slide']}
        transitionDuration={150}
        theme={theme}
        progress="bar"
      >
        <Slide id="title">
          <Heading fit caps>⚛️🎣 (React Hooks)</Heading>
          <Text style={{textAlign: 'right'}}>
            Mihail Mikov
          </Text>
          <Text style={{textAlign: 'right'}}>
            @debelbot
          </Text>
        </Slide>
        <Slide id="evolution">
          <Heading caps size={4}>The evolution of<br/>React's APIs</Heading>
          <List>
            <ListItem>String magic</ListItem>
            <ListItem>Callbacks</ListItem>
            <ListItem>Instances</ListItem>
            <ListItem>Hooks</ListItem>
          </List>
        </Slide>

        <Slide id="string-refs">
          <Text caps textSize="0.7em">The evolution of React APIs</Text>
          <Heading caps size={4}>2015: String refs</Heading>
          <CodePane lang="js" theme="external" source={searchBox_class_string_ref} />
        </Slide>
        <Slide id="callback-refs">
          <Text caps textSize="0.7em">The evolution of React APIs</Text>
          <Heading caps size={4}>2016: Callback refs</Heading>
          <CodePane lang="js" theme="external" source={searchBox_class_callback_ref} />
        </Slide>
        <Slide id="instance-refs">
          <Text caps textSize="0.7em">The evolution of React APIs</Text>
          <Heading caps size={4}>2017: Instance refs</Heading>
          <CodePane lang="js" theme="external" source={searchBox_class_instance_ref} />
        </Slide>
        <Slide id="hook-refs">
          <Text caps textSize="0.7em">The evolution of React APIs</Text>
          <Heading caps size={4}>2018: Hook refs</Heading>
          <CodePane lang="js" theme="external" source={searchBox_func_hook_ref} />
        </Slide>

        <Slide id="method-side-effects">
          <Text caps textSize="0.7em">The evolution of React APIs</Text>
          <Heading caps fit size={4}>2016: Method side-effects</Heading>
          <CodePane lang="js" theme="external" source={method_side_effects} />
        </Slide>
        <Slide id="hook-side-effects">
          <Text caps textSize="0.7em">The evolution of React APIs</Text>
          <Heading caps size={4}>2018: Hook side-effects</Heading>
          <CodePane lang="js" theme="external" source={hook_side_effects} />
        </Slide>

        <Slide id="legacy-context">
          <Text caps textSize="0.7em">The evolution of React APIs</Text>
          <Heading caps size={4}>2016: Legacy context</Heading>
          <CodePane lang="js" theme="external" source={theme_legacyContext} />
        </Slide>
        <Slide id="render-props-context">
          <Text caps textSize="0.7em">The evolution of React APIs</Text>
          <Heading caps size={4}>2017: Render props context</Heading>
          <CodePane lang="js" theme="external" source={theme_renderPropsContext} />
        </Slide>
        <Slide id="hooks-context">
          <Text caps textSize="0.7em">The evolution of React APIs</Text>
          <Heading caps size={4}>2018: Hook context</Heading>
          <CodePane lang="js" theme="external" source={theme_hookContext} />
        </Slide>

        <Slide id="class-state">
          <Text caps textSize="0.7em">The evolution of React APIs</Text>
          <Heading caps size={4}>2016: Class state</Heading>
          <CodePane lang="js" theme="external" source={seen_classState} />
        </Slide>
        <Slide id="hook-state">
          <Text caps textSize="0.7em">The evolution of React APIs</Text>
          <Heading caps size={4}>2018: Hook state</Heading>
          <CodePane lang="js" theme="external" source={seen_hookState} />
        </Slide>

        <Slide id="hooks-pattern">
          <Heading caps size={4}>Hooks</Heading>
          <Text>One pattern to rule them all</Text>
        </Slide>

        <Slide id="hooks-redux">
          <Heading caps size={4}>Hook redux</Heading>
          <CodePane lang="js" theme="external" source={hook_redux} />
        </Slide>

        <Slide id="custom-hooks">
          <Heading caps size={4}>Custom hooks</Heading>
          <CodePane lang="js" theme="external" source={useFocusOnMount_customHook} />
          <CodePane lang="js" theme="external" source={searchBox_func_custom_hooks} />
        </Slide>

        <Slide id="dynamic-context-hook">
          <Heading caps size={4}>Dynamic Context hooks</Heading>
          <CodePane lang="js" theme="external" source={dynamicContext_hook} />
        </Slide>

        <Slide id="how-it-works">
          <Heading caps size={4}>How it all works?!</Heading>
          <Image src="images/vdom-tree.png" />
        </Slide>
        <Slide id="hooks-all-the-way-down">
          <Text caps>It's</Text>
          <Heading caps size={4}>Hooks</Heading>
          <Text caps>all the way down</Text>
        </Slide>

        <Slide id="missing-error-hook">
          <Heading caps size={4}>Still missing</Heading>
          <Text>hook that allows functional components to
            handle errors in their sub-trees </Text>
          <CodePane lang="js" theme="external" source={errorBoundary_hook} />
          <CodePane lang="js" theme="external" source={vipContent_usingAuth} />
        </Slide>

        <Slide id="errors-render-prop">
          <CodePane lang="js" theme="external" source={functional_errorBoundry} />
          <CodePane lang="js" theme="external" source={errorBoundry_renderProps} />
        </Slide>

        <Slide id="major-drawbacks">
          <Heading caps size={4}>Major drawbacks</Heading>
          <List>
            <ListItem>Implementation drawback: Can't call hooks conditionally</ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
          </List>
        </Slide>


        <Slide id="links">
          <Heading caps size={4}>Links</Heading>
          <List>
            <ListItem><Link href="https://reactjs.org/blog/2018/11/27/react-16-roadmap.html">React's roadmap</Link></ListItem>
            <ListItem><Link href="https://reactjs.org/docs/hooks-intro.html">Intro to hooks</Link></ListItem>
            <ListItem><Link href="https://reactjs.org/docs/hooks-reference.html">Official docs</Link></ListItem>
            <ListItem><Link href="https://usehooks.com/">One hook a day</Link></ListItem>
            <ListItem><Link href="https://www.hooks.guide/">Example hooks</Link></ListItem>
            <ListItem><Link href="https://github.com/rehooks/awesome-react-hooks">List of resources about hooks</Link></ListItem>
          </List>
        </Slide>
        <Slide id="thanks">
          <Heading caps>Thank you!<br/>Q&A</Heading>
        </Slide>
      </Deck>
    </React.Fragment>);
  }
}

/*
  <Slide id="silliy-syntax">
    <Heading caps size={4}>Expression components</Heading>
    <CodePane lang="js" theme="external" source={componentHookExpression} />
  </Slide>
*/
