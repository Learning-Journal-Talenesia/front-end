import { Box, Button, Heading } from "@chakra-ui/react"
import HeadingBox from "../components/HeadingBox"

const TemaClassView = () => {
  return (
    <main>
        <Box height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center"  >
            <HeadingBox textAlign="center">Kelas intensif - Admin Perkantoran</HeadingBox>
            <Heading
          size="sm"
          marginTop={2}
          color="app.blue.active"
          textAlign="center"
        >
          Learning Journal
        </Heading>
        <Box mt={10} display="flex" justifyContent="space-between" width={250}>
          <Button variant="secondary">Kembali</Button>
          <Button variant="primary" px={8}>Lanjut</Button>
        </Box>
        </Box>
    </main>
  )
}

export default TemaClassView
