package com.url.url_shortner_backend.repository;

import com.url.url_shortner_backend.Models.UrlMapping;
import com.url.url_shortner_backend.Models.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UrlMappingRepository extends JpaRepository<UrlMapping, Long> {

    public List<UrlMapping> findByUsers(Users user);

    public UrlMapping findByShortUrl(String shortUrl);
}
