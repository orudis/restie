// Generated by CoffeeScript 1.3.1
var Post, Restie, expect;

if (!(typeof window !== "undefined" && window !== null)) {
  Restie = require('../../');
  expect = require('expect.js');
}

Restie.set({
  urls: {
    base: 'http://localhost:8080'
  },
  defaults: {
    headers: {
      'X-Authorization': '12345'
    },
    fields: {
      '_csrf_token': '12345'
    },
    params: {
      '_csrf_token': '12345'
    }
  }
});

Post = Restie.define('Post', {
  wrapFields: false,
  primaryKey: 'id'
});

describe('Restie', function() {
  return describe('CRUD', function() {
    it('should fetch all posts', function(done) {
      return Post.all(function(err, posts) {
        expect(posts.length).to.be(0);
        return done();
      });
    });
    it('should create post, slow method', function(done) {
      var post;
      post = new Post;
      post.title = 'New post';
      post.body = 'Content';
      return post.save(function() {
        return Post.all(function(err, posts) {
          expect(posts.length).to.be(1);
          return done();
        });
      });
    });
    it('should create post, faster method', function(done) {
      var post;
      post = new Post({
        title: 'New post',
        body: 'Content'
      });
      return post.save(function() {
        return Post.all(function(err, posts) {
          expect(posts.length).to.be(2);
          return done();
        });
      });
    });
    it('should create post, fastest method', function(done) {
      return Post.create({
        title: 'New post',
        body: 'Content'
      }, function(err, post) {
        return Post.all(function(err, posts) {
          expect(posts.length).to.be(3);
          return done();
        });
      });
    });
    it('should find post', function(done) {
      return Post.find_by_id(1, function(err, post) {
        expect(post.title).to.be('New post');
        return done();
      });
    });
    it('should update post', function(done) {
      return Post.find_by_id(1, function(err, post) {
        post.title = 'New title';
        return post.save(function() {
          return Post.find_by_id(1, function(err, post) {
            expect(post.title).to.be('New title');
            return done();
          });
        });
      });
    });
    return it('should remove post', function(done) {
      return Post.find_by_id(1, function(err, post) {
        return post.remove(function() {
          return Post.all(function(err, posts) {
            expect(posts.length).to.be(2);
            return done();
          });
        });
      });
    });
  });
});
