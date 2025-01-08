"use client";

import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Modal,
  Typography,
} from "@mui/material";

import { handleNameChange, handleEmailChange, handleWhatsappChange, validateFields } from "../functions/formHandlers";

import * as S from "./styles";

export default function Home() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [errors, setErrors] = useState({ nome: "", email: "", whatsapp: "" });

  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    const trimmedNome = nome.trimEnd();
    setNome(trimmedNome);

    if (validateFields(nome, email, whatsapp, setErrors)) {
      setShowModal(true);
      console.log({ nome: trimmedNome, email, whatsapp });
    }
  };

  const handleClose = () => setShowModal(false);

  return (
    <S.Container>
      <Box
        component="video"
        src="/video/bg-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />

      <S.Header>
        <img src="/logo-fds-docs.svg" alt="Logo FDS Docs" />
      </S.Header>

      <S.Wrapper>
        <S.ContainerForm>
          <S.Description>
            <span>Download Our Free Guide:</span>

            <h1>Maximize Efficiency with Smart Software Solutions</h1>

            <p>Discover how our state-of-the-art software can revolutionize your business.</p>
          </S.Description>

          <S.Form>
            <h2>Seja bem-vindo(a)!</h2>

            <S.FormDescription>
              <p>Quer ser um dos primeiros a conhecer nosso novo sistema de emissão e gerenciamento de documentos de segurança?</p>
            
              <p>Inscreva-se e fique por dentro!</p>
            </S.FormDescription>

            <TextField
              id="nome"
              label="Nome Completo"
              variant="outlined"
              value={nome}
              onChange={(e) => handleNameChange(e, setNome, setErrors)}
              error={!!errors.nome}
              helperText={errors.nome}
            />

            <TextField
              id="email"
              label="E-mail"
              variant="outlined"
              value={email}
              onChange={(e) => handleEmailChange(e, setEmail, setErrors)}
              error={!!errors.email}
              helperText={errors.email}
            />

            <TextField
              id="whatsapp"
              label="WhatsApp (Opcional)"
              variant="outlined"
              value={whatsapp}
              onChange={(e) => handleWhatsappChange(e, setWhatsapp, setErrors)}
              error={!!errors.whatsapp}
              helperText={errors.whatsapp}
            />

            <Button variant="contained" onClick={handleButtonClick}>
              Inscrever-se
            </Button>
          </S.Form>
        </S.ContainerForm>


        <Modal
          open={showModal}
          onClose={handleClose}
          aria-labelledby="success-modal-title"
          aria-describedby="success-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
              textAlign: "center",
            }}
          >
            <Typography
              id="success-modal-title"
              variant="h6"
              component="h2"
              sx={{ marginBottom: 2 }}
            >
              Inscrição realizada com sucesso!
            </Typography>

            <Typography id="success-modal-description" sx={{ mb: 3 }}>
              Obrigado por se inscrever. Entraremos em contato em breve!
            </Typography>

            <Button variant="contained" onClick={handleClose}>
              Fechar
            </Button>
          </Box>
        </Modal>
      </S.Wrapper>
    </S.Container>
  );
}
