package com.url.url_shortner_backend.Models;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.jdbc.datasource.SmartDataSource;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
public class UrlMapping {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String originalUrl;
    private String shortUrl;
    private int clickCount = 0;
    private LocalDateTime createdDate;

    @ManyToOne
    @JoinColumn(name = "users_id")
    private Users users;

    @OneToMany(mappedBy = "urlMapping")
    private List<ClickEvent> clickEvents;

}
