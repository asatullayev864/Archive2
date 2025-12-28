import React from 'react';

import blog1 from '../../../components/icons/src/Blog/blog1.svg';
import blog2 from '../../../components/icons/src/Blog/blog2.svg';
import blog3 from '../../../components/icons/src/Blog/blog3.svg';

import {
    BlogSection,
    BlogHeader,
    BlogTitle,
    BlogCard,
    BlogCardTitle,
    BlogCardDate,
    BlogGrid,
    BlogMobileButton
} from './Blog.styled';

function Blog() {
    const blogItems = [
        { img: blog1, title: "Как правильно освещать дом\nснаружи?", date: "01.01.2024" },
        { img: blog2, title: "Как правильно освещать дом\nснаружи?", date: "01.01.2024" },
        { img: blog3, title: "Как правильно освещать дом\nснаружи?", date: "01.01.2024" },
    ];

    return (
        <BlogSection>
            <BlogHeader>
                <BlogTitle>Блог</BlogTitle>
            </BlogHeader>

            <BlogGrid>
                {blogItems.map((item, index) => (
                    <BlogCard key={index} className={index > 0 ? "hide-mobile" : ""}>
                        <img src={item.img} alt="blog" />
                        <BlogCardTitle>{item.title}</BlogCardTitle>
                        <BlogCardDate>{item.date}</BlogCardDate>
                    </BlogCard>
                ))}
            </BlogGrid>

            <BlogMobileButton>
                <button>Перейти в блог →</button>
            </BlogMobileButton>
        </BlogSection>
    );
}

export default Blog;
