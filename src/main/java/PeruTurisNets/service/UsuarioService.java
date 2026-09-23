package PeruTurisNets.service;

import PeruTurisNets.modell.Usuario;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UsuarioService {

    private final List<Usuario> usuarios = new ArrayList<>();

    public void guardar(Usuario usuario) {
        usuarios.add(usuario);
    }

    public List<Usuario> listar() {
        return usuarios;
    }
}