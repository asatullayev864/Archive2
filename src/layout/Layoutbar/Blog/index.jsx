import React from 'react';

import blog1 from '../../../components/icons/src/Blog/blog1.svg';
import blog2 from '../../../components/icons/src/Blog/blog2.svg';
import blog3 from '../../../components/icons/src/Blog/blog3.svg';
import vector from '../../../components/icons/src/Blog/Vector.svg';

import {
    BlogSection,
    BlogHeader,
    BlogTitle,
    BlogButton,
    BlogCard,
    BlogCardTitle,
    BlogCardDate,
    BlogGrid
} from './Blog.styled';

function Blog() {
    return (
        <BlogSection>
            <BlogHeader>
                <BlogTitle>Блог</BlogTitle>
                <BlogButton>Перейти в блог →</BlogButton>
            </BlogHeader>

            <BlogGrid>
                <BlogCard>
                    <img src={blog1} alt="blog" />
                    <BlogCardTitle>
                        Как правильно освещать дом{"\n"}снаружи?
                    </BlogCardTitle>
                    <BlogCardDate>01.01.2024</BlogCardDate>
                </BlogCard>

                <BlogCard>
                    <img src={blog2} alt="blog" />
                    <BlogCardTitle>
                        Как правильно освещать дом{"\n"}снаружи?
                    </BlogCardTitle>
                    <BlogCardDate>01.01.2024</BlogCardDate>
                </BlogCard>

                <BlogCard>
                    <img src={blog3} alt="blog" />
                    <BlogCardTitle>
                        Как правильно освещать дом{"\n"}снаружи?
                    </BlogCardTitle>
                    <BlogCardDate>01.01.2024</BlogCardDate>
                </BlogCard>

            </BlogGrid>
        </BlogSection>
    );
}

export default Blog;
