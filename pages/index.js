import { useRouter } from 'next/router';
import { Container, Typography, Button, Box } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import styles from "../styles/Home.module.css";

import Pricing from "../components/Pricing";

export default function Home() {
  const router = useRouter();

  return (
    <Container className={styles.container}>
      <Container className={styles.main}>
        <Typography
          variant="h3"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          Welcome to
          <Typography variant="span" color="primary">
            {" "}
            Base App!
          </Typography>
        </Typography>

        <Typography variant="h5" gutterBottom align="center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Typography>

        <Box textAlign="center" mt={3}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<PersonAddIcon />}
            size="large"
            onClick={() => router.push('/signup')}
          >
            Sign Up
          </Button>
        </Box>

        <Pricing />
      </Container>
    </Container>
  );
}
