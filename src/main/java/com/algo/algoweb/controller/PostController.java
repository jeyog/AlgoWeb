package com.algo.algoweb.controller;

import com.algo.algoweb.domain.Post;
import com.algo.algoweb.domain.User;
import com.algo.algoweb.dto.PostDTO;
import com.algo.algoweb.service.PostService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/post")
public class PostController {
    private final ModelMapper modelMapper;
    private final PostService postService;

    @Autowired
    public PostController(final ModelMapper modelMapper, final PostService postService) {
        this.modelMapper = modelMapper;
        this.postService = postService;
    }

    @PostMapping
    public ResponseEntity<PostDTO.Response> writePost(@AuthenticationPrincipal User user, @RequestBody PostDTO.Request request) {
        PostDTO.Response response = new PostDTO.Response();
        Post post = modelMapper.map(request, Post.class);
        post.setUser(user);
        post = postService.createPost(post);
        response.setSuccess(true);
        response.setMessage("게시물을 성공적으로 작성하였습니다.");
        response.setPost(modelMapper.map(post, PostDTO.class));
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<Page<PostDTO>> getPostsByPage(@AuthenticationPrincipal User user, @RequestParam Pageable pageable) {
        Page<PostDTO> response = postService.loadPostsByPage(pageable).map(p -> modelMapper.map(p, PostDTO.class));
        return ResponseEntity.ok(response);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<PostDTO.Response> getPostById(@AuthenticationPrincipal User user, @PathVariable("id") Integer id) {
        PostDTO.Response response = new PostDTO.Response();
        Post post = postService.loadPostById(id);
        response.setSuccess(true);
        response.setMessage("게시물을 성공적으로 불러왔습니다.");
        response.setPost(modelMapper.map(post, PostDTO.class));
        return ResponseEntity.ok(response);
    }

    @PutMapping(value ="/{id}")
    public ResponseEntity<PostDTO.Response> putPostById(@AuthenticationPrincipal User user, @PathVariable("id") Integer id, @RequestBody PostDTO.Request request) {
        PostDTO.Response response = new PostDTO.Response();
        Post post = postService.loadPostById(id);
        if (user.getId() != post.getUser().getId()) {
            response.setSuccess(false);
            response.setMessage("변경 권한이 없습니다.");
            response.setPost(modelMapper.map(post, PostDTO.class));
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(response);
        }
        post.setTitle(request.getTitle());
        post.setContent(request.getContent());
        post = postService.updatePost(post);
        response.setSuccess(true);
        response.setMessage("게시물을 성공적으로 수정하였습니다.");
        response.setPost(modelMapper.map(post, PostDTO.class));
        return ResponseEntity.ok(response);
    }

    @PatchMapping(value = "/{id}")
    public ResponseEntity<PostDTO.Response> patchPostById(@AuthenticationPrincipal User user, @PathVariable("id") Integer id, @RequestBody PostDTO.Request request) {
        PostDTO.Response response = new PostDTO.Response();
        Post post = postService.loadPostById(id);
        if (user.getId() != post.getUser().getId()) {
            response.setSuccess(false);
            response.setMessage("변경 권한이 없습니다.");
            response.setPost(modelMapper.map(post, PostDTO.class));
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(response);
        }
        if (request.getTitle() != null) {
            post.setTitle(request.getTitle());
        }
        if (request.getContent() != null) {
            post.setContent(request.getContent());
        }
        post = postService.updatePost(post);
        response.setSuccess(true);
        response.setMessage("게시물을 성공적으로 수정하였습니다.");
        response.setPost(modelMapper.map(post, PostDTO.class));
        return ResponseEntity.ok(response);
    }

    @DeleteMapping(value ="/{id}")
    public ResponseEntity<PostDTO.Response> deletePostById(@AuthenticationPrincipal User user, @PathVariable("id") Integer id) {
        PostDTO.Response response = new PostDTO.Response();
        Post post = postService.loadPostById(id);
        if (user.getId() != post.getUser().getId()) {
            response.setSuccess(false);
            response.setMessage("삭제 권한이 없습니다.");
            response.setPost(modelMapper.map(post, PostDTO.class));
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(response);
        }
        postService.deletePost(post);
        response.setSuccess(true);
        response.setMessage("게시물을 성공적으로 삭제하였습니다.");
        response.setPost(modelMapper.map(post, PostDTO.class));
        return ResponseEntity.ok(response);
    }
}
