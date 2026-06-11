import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
@Table(name = "tb-accounts")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private String accountNumber;

    private BigDecimal balance; 

    @OneToOne
    private User user;
}
