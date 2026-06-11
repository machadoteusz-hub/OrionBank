@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO>
    login(
        @RequestBody
        LoginRequestDTO request
    ) {

        return ResponseEntity.ok(
            authService.login(request)
        );
    }
}