package com.smartpizza.config;
 
import java.security.Key;
import java.util.Date;
import java.util.function.Function;
 
import javax.crypto.spec.SecretKeySpec;
 
import org.springframework.stereotype.Component;
 
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
 
@Component
public class JwtUtil {
 
    private static final String SECRET =
            "smartpizzaapplicationjwtsecretkey123456";
 
    private final Key key =
            new SecretKeySpec(
                    SECRET.getBytes(),
                    SignatureAlgorithm.HS256.getJcaName());
 
    public String generateToken(String email) {
 
        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(new Date())
                .setExpiration(
                        new Date(System.currentTimeMillis() + 86400000))
                .signWith(key)
                .compact();
    }
 
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }
 
    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }
 
    public <T> T extractClaim(
            String token,
            Function<Claims, T> claimsResolver) {
 
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();
 
        return claimsResolver.apply(claims);
    }
 
    public boolean validateToken(
            String token,
            String email) {
 
        return extractUsername(token).equals(email)
                && !extractExpiration(token).before(new Date());
    }
}