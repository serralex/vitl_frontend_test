import styled from 'styled-components';

export const STYLE_CONSTANTS = {
  primaryColor: '#ffd326',
  creamColor: '#fef6dc'
}

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (min-width: 992px) {
    max-width: 992px;
  }

  @media (min-width: 1201px)
    max-width: 1201px;
  }

  @media (min-width: 1441px)
    max-width: 1441px;
  }
`;

export const Row = styled.div`
  box-sizing: border-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`

export const Section = styled.section`
  position: relative;
`

export const Divider = styled.div`
  display: inline-block;
  width: 70px;
  height: 2px;
  margin-top: ${props => props.marginTop || '30px'}};
  margin-bottom: ${props => props.marginTop || '25px'}};
  background-color: ${STYLE_CONSTANTS.primaryColor}
`

export const Col2 = styled.div`
  width: 50%;
  display:flex;
`

export const Heading3 = styled.div`
  font-family: SofiaPro,Helvetica,Arial,Sans-Serif;
  font-weight:bold;
  font-size: 22px;
  line-height: 30px;
`


