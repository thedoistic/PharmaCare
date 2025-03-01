import React from "react";
import { motion } from "framer-motion";
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledHeroBox = styled(Box)(({ theme }) => ({
  height: "85vh",
  position: "relative", 
  background: "linear-gradient(135deg, #00796b 0%, #009688 100%)",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "url('/path/to/texture.png')",
    opacity: 0.1,
  }
}));

const StyledCard = styled(Card)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(15px)",
  borderRadius: "20px",
  boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
  transition: "all 0.4s ease",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  "&:hover": {
    transform: "translateY(-12px) scale(1.02)",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.2)",
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontStyle: "italic",
  fontFamily: "Georgia, 'Times New Roman', Times, serif",
  textAlign: "center",
  letterSpacing: "0.5px",
  lineHeight: 1.8,
}));

const GlassContainer = styled(Box)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  borderRadius: "30px",
  padding: "2rem",
  border: "1px solid rgba(255, 255, 255, 0.2)",
}));

const About = () => {
  return (
    <Box>
      <StyledHeroBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{ width: "100%" }}
        >
          <Container maxWidth="lg">
            <GlassContainer>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.2 }}
              >
                <Typography variant="h1" align="center" sx={{ 
                  color: "white",
                  fontSize: { xs: "3.2rem", md: "5rem" },
                  mb: 3,
                  textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                  fontStyle: "italic",
                  fontFamily: "Pacifico, cursive"
                }}>
                  About PharmaCare
                </Typography>
                <StyledTypography variant="h5" align="center" sx={{ 
                  color: "white", 
                  mb: 4,
                  textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                  maxWidth: "800px",
                  margin: "0 auto"
                }}>
                  We believe in quality, trust, and care. Discover our journey, our values,
                  and our commitment to your health.
                </StyledTypography>
              </motion.div>
            </GlassContainer>
          </Container>
        </motion.div>
      </StyledHeroBox>

      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              <Paper elevation={12} sx={{ 
                borderRadius: "24px", 
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}>
                <img 
                  src="https://pro-pharma.ua/uploads/team-min3.jpg" 
                  alt="Our Team"
                  style={{ 
                    width: "100%", 
                    height: "auto",
                    transform: "scale(1.02)",
                    transition: "transform 0.6s ease"
                  }}
                />
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              <Typography variant="h3" sx={{ 
                color: "#00796b", 
                mb: 4,
                fontStyle: "italic",
                fontWeight: "bold",
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                textAlign: "center"
              }}>
                Our Story
              </Typography>
              <StyledTypography variant="body1" sx={{ 
                mb: 3,
                fontSize: "1.1rem",
                color: "#333",
                textAlign: "center"
              }}>
                PharmaCarer was founded on the belief that quality healthcare should be accessible to
                everyone. With decades of combined experience, our team of expert pharmacists and healthcare
                professionals is committed to providing the highest standard of service.
              </StyledTypography>
              <StyledTypography variant="body1" sx={{
                fontSize: "1.1rem",
                color: "#333"
              }}>
                We strive to be more than just a pharmacy. We are your trusted partner on your journey to
                better health. From personalized care to fast, reliable delivery, our services are designed
                to meet your unique needs.
              </StyledTypography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ 
        bgcolor: "rgba(245, 245, 245, 0.9)",
        py: 10,
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(0,0,0,0.1)",
        borderBottom: "1px solid rgba(0,0,0,0.1)"
      }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" sx={{ 
            color: "#00796b",
            mb: 6,
            fontStyle: "italic",
            fontWeight: "bold",
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
          }}>
            Our Values
          </Typography>
          <Grid container spacing={4}>
            {[
              { title: "Quality", content: "We provide only the best and most reliable healthcare products.", color: "#4CAF50" },
              { title: "Trust", content: "Your health is our top priority, and we work hard to earn your trust every day.", color: "#2196F3" },
              { title: "Care", content: "We are dedicated to offering personalized care and expert advice to every customer.", color: "#9C27B0" }
            ].map((value, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <StyledCard sx={{ 
                    bgcolor: value.color,
                    color: "white",
                    minHeight: "200px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                  }}>
                    <CardContent>
                      <Typography variant="h5" sx={{ 
                        mb: 2,
                        fontStyle: "italic",
                        fontWeight: "bold",
                        textShadow: "1px 1px 2px rgba(0,0,0,0.2)"
                      }}>
                        {value.title}
                      </Typography>
                      <StyledTypography variant="body1">
                        {value.content}
                      </StyledTypography>
                    </CardContent>
                  </StyledCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h3" align="center" sx={{ 
          color: "#00796b",
          mb: 6,
          fontStyle: "italic",
          fontWeight: "bold",
          textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
        }}>
          Our Philosophy
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <StyledCard>
              <CardContent sx={{ p: 4 }}>
                <StyledTypography variant="body1" sx={{ mb: 3 }}>
                  At PharmaCarer, our philosophy is not just a statement—it's a way of life. We embrace the art and science of healthcare with passion and precision. Our commitment to excellence is woven into every interaction and every prescription we fill.
                </StyledTypography>
                <StyledTypography variant="body1" sx={{ mb: 3 }}>
                  We believe that true care means understanding the unique needs of each individual. Our dedicated team listens, learns, and adapts, ensuring that every client experiences a personalized approach that is both empathetic and innovative.
                </StyledTypography>
                <StyledTypography variant="body1">
                  Through collaboration and continuous improvement, we strive to set new standards in the pharmaceutical industry, transforming challenges into opportunities and obstacles into triumphs.
                </StyledTypography>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ 
        bgcolor: "rgba(245, 245, 245, 0.9)",
        py: 10,
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(0,0,0,0.1)"
      }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" sx={{ 
            color: "#00796b",
            mb: 6,
            fontStyle: "italic",
            fontWeight: "bold",
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}>
            Meet Our Team
          </Typography>
          <Grid container spacing={4}>
            {[
              { name: "Dr. Jane Doe", role: "Chief Pharmacist", image: "https://jnj-content-lab2.brightspotcdn.com/dims4/default/73be571/2147483647/strip/true/crop/1439x1079+306+0/resize/2048x1536!/format/webp/quality/90/?url=https%3A%2F%2Fjnj-production-jnj.s3.us-east-1.amazonaws.com%2Fbrightspot%2F8b%2F69%2F4a99b6ad41de84f5b491bd95296a%2Fjoaquinduato2021-white-jpeg-cc.jpg" },
              { name: "John Smith", role: "Operations Manager", image: "https://jnj-content-lab2.brightspotcdn.com/dims4/default/8af5d56/2147483647/strip/true/crop/1440x1080+458+0/resize/2048x1536!/format/webp/quality/90/?url=https%3A%2F%2Fjnj-production-jnj.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fa6%2F41%2F876914394d038d8a5458524c1e29%2Fjennifer-taubert-1540-2-1-copy-cc.jpg" },
              { name: "Mary Johnson", role: "Customer Care Lead", image: "https://jnj-content-lab2.brightspotcdn.com/dims4/default/246635a/2147483647/strip/true/crop/1180x885+0+71/resize/2048x1536!/format/webp/quality/90/?url=https%3A%2F%2Fjnj-production-jnj.s3.us-east-1.amazonaws.com%2Fbrightspot%2F04%2F79%2F6ddbb5d4494caedde56931533c54%2Flizforminard-square.jpg" }
            ].map((member, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <StyledCard>
                    <CardMedia
                      component="img"
                      height="300"
                      image={member.image}
                      alt={member.name}
                      sx={{ objectFit: "cover" }}
                    />
                    <CardContent>
                      <Typography variant="h6" sx={{ 
                        color: "#00796b",
                        fontStyle: "italic",
                        fontWeight: "bold",
                        textAlign: "center"
                      }}>
                        {member.name}
                      </Typography>
                      <StyledTypography variant="subtitle1" color="text.secondary">
                        {member.role}
                      </StyledTypography>
                    </CardContent>
                  </StyledCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
