@Entity
@Table(name = "tb_transfers")
public class Transfer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private BigDecimal amount;

    private String destinationKey;

    private LocalDateTime transferDate;

    @ManyToOne
    private User user;
}