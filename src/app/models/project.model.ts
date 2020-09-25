import { Technology } from "./technology.model"
import { Link } from "./link.model"
import { Image } from "./image.model"

export interface Project {
    title: String,
    subtitle: String,
    category: String,
    thumbnail: String,
    dateCreated: Date,
    technologies: Array<Technology>,
    description: String,
    links: Array<Link>,
    images: Array<Image>
}