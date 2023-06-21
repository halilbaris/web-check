
import styled from 'styled-components';
import colors from 'styles/colors';
import Card from 'components/Form/Card';
import Heading from 'components/Form/Heading';
import Row, { ExpandableRow } from 'components/Form/Row';

const Outer = styled(Card)``;

const CookiesCard = (props: { cookies: any }): JSX.Element => {
  const cookies = props.cookies;
  console.log('COOKIES: ', cookies);
  return (
    <Outer>
      <Heading as="h3" size="small" align="left" color={colors.primary}>Cookies</Heading>
      {/* { subject && <DataRow lbl="Subject" val={subject?.CN} /> } */}
      {
        cookies.map((cookie: any, index: number) => {
          const attributes = Object.keys(cookie.attributes).map((key: string) => {
            return { lbl: key, val: cookie.attributes[key] }
          });
          return (
            <ExpandableRow key={`cookie-${index}`} lbl={cookie.name} val={cookie.value} rowList={attributes} />
          )
        })
      } 
    </Outer>
  );
}

export default CookiesCard;