@Entity
@Table(name = "tb_investments")
public class Investment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String investmentName;

    private BigDecimal amount;

    private BigDecimal profitability;

    @ManyToOne
    private User user;
}
