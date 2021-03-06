import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Project } from '../models/project.model';
import { Injectable } from '@angular/core';
import { Technology } from '../models/technology.model';
import { Link } from '../models/link.model';
import { Image } from '../models/image.model';

const API_BASE_URL = environment.apiUrl + "api/projects"
const SEARCH_API_URL = environment.apiUrl + "api/search"

@Injectable({ providedIn: "root" })

export class ProjectService {

  constructor(private httpClient: HttpClient, private router: Router, private _snackBar: MatSnackBar) { }

  async getAllProjects() {
    try {
      let res = await this.httpClient.get<{ message: string, projects: Array<any> }>(API_BASE_URL).toPromise()

      let projects: Array<Project> = res.projects.map((project) => this.constructProjectObject(project))
      return { message: res.message, projects: projects }

    } catch (ex) {
      return { message: "Unable to get project list" }
    }
  }

  async getOneProject(projectName: string) {
    let name = encodeURI(projectName);

    try {
      let res = await this.httpClient.get<{ message: string, project: any }>(`${API_BASE_URL}/${name}`).toPromise()
      let project: Project = this.constructProjectObject(res.project)
      return { message: res.message, project: project }

    } catch (ex) {
      return { message: "Unable to get project" }
    }
  }


  async getSearchResults(terms: string) {

    try {
      let res = await this.httpClient.get<{ message: string, projects: Array<any> }>(SEARCH_API_URL, { params: { terms: terms } }).toPromise()
      let projects: Array<Project> = res.projects.map((project) => this.constructProjectObject(project))
      return { message: res.message, projects: projects }

    } catch (ex) {
      return { message: "Unable to perform search." }
    }
  }

  async createProject(projectTitle: string) {
    const title = { title: projectTitle }

    try {
      let res = await this.httpClient.post<{ message: string, project: any }>(API_BASE_URL + "/create", title).toPromise()
      const project: Project = this.constructProjectObject(res.project)

      return { message: res.message, project: project }

    } catch (ex) {
      return { message: "Unable to create project" }
    }
  }


  async updateProject(title: string, project: Project) {
    const reqBody = { title: title, project: project }

    try {
      let res = await this.httpClient.put<{ message: string, project: any }>(API_BASE_URL, reqBody).toPromise()
      const project: Project = this.constructProjectObject(res.project)

      return { message: res.message, project: project }

    } catch (ex) {
      return { message: "Unable to update project" }
    }
  }


  async getUniqueTechnologies() {
    try {
      let res = await this.httpClient.get<{ message: string, techs: Array<any>}>(API_BASE_URL + "/unique/technologies").toPromise()

      return { message: res.message, techs: res.techs }

    } catch (ex) {
      return { message: "Unable to get featured list" }
    }
  }


  async getRecentProjects() {
    try {
      let res = await this.httpClient.get<{ message: string, projects: Array<any>}>(API_BASE_URL + "/recent/projects").toPromise()

      return { message: res.message, projects: res.projects }

    } catch (ex) {
      return { message: "Unable to get recent project list" }
    }
  }



  async getFeaturedProjects(type: string) {
    try {
      let res = await this.httpClient.get<{ message: string, projects: Array<any> }>(API_BASE_URL + "/featured/" + type).toPromise()

      let projects: Array<Project> = res.projects.map((project) => this.constructProjectObject(project))
      return { message: res.message, projects: projects }

    } catch (ex) {
      return { message: "Unable to get featured list" }
    }
  }


  async updateFeaturedProjects(type: string, featuredProjects: Array<{ title: string }>) {
    try {
      let res = await this.httpClient.post<{ message: string }>(API_BASE_URL + "/featured/" + type, featuredProjects).toPromise()

      return { message: res.message }

    } catch (ex) {
      return { message: "Unable to save featured list" }
    }
  }


  async deleteProject(title: string) {
    try {
      let res = await this.httpClient.delete<{ message: string }>(API_BASE_URL + "/delete/" + encodeURI(title)).toPromise()
      console.log(res)
      return { message: res.message }

    } catch {
      return { message: "Unable to delete project." }
    }
  }


  constructProjectObject(project) {
    let technologies: Array<Technology> = project.technologies.map((tech) => {
      return {
        name: tech.name,
        src: tech.src
      }
    });

    let links: Array<Link> = project.links.map((link) => {
      return {
        name: link.name,
        type: link.type,
        url: link.url
      }
    });

    let images: Array<Image> = project.images.map((image) => {
      return {
        name: image.name,
        src: image.src,
        caption: image.caption,
        width: image.width,
        height: image.height
      }
    });

    return {
      title: project.title,
      subtitle: project.subtitle,
      category: project.category,
      thumbnail: project.thumbnail,
      featured: project.featured,
      description: project.description,
      dateCreated: project.dateCreated,
      technologies: technologies,
      links: links,
      images: images
    }
  }

}