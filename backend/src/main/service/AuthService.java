@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;

    public LoginResponseDTO login(
            LoginRequestDTO request) {

        User user =
                userRepository
                        .findByCpf(request.getCpf())
                        .orElseThrow();

        return new LoginResponseDTO(
                "jwt-token",
                user.getCpf(),
                user.getFullName());
    }
}