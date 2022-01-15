package com.algo.algoweb.repository;

import com.algo.algoweb.domain.Board;
import com.algo.algoweb.domain.Post;
import com.algo.algoweb.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Integer> {
    Page<Post> findByUser(User user, Pageable pageable);
    Page<Post> findAll(Pageable pageable);
    Page<Post> findByBoard(Board board, Pageable pageable);
}
