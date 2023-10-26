import styled from "@emotion/styled"

export const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
    </Container>
  )
}

// Use @emotion to create elements instead of using react className
// or any MUI components https://mui.com/material-ui/react-button/
const Container = styled.div`
  // display: flex;
  // justify-content: center;
`
