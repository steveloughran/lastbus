/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.apache.bristol.lastbus.api;

import com.google.common.collect.Lists;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.apache.bristol.lastbus.types.Header;

import java.util.List;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import static javax.ws.rs.core.MediaType.*;

@Path("/")
public class ServerAPI {
  protected static final Logger LOG =
      LoggerFactory.getLogger(ServerAPI.class);

  private void method(String name) {
    LOG.info("method: {}", name);
  }

  @GET
  @Path("/text")
  @Produces(TEXT_PLAIN)
  public String getIt() {
    return "Got it!";
  }

  @GET
  @Path("/foo")
  @Produces({APPLICATION_JSON})
  public List<String> getRoot() {
    return toJsonList("none");
  }

  @GET
  @Path("/header")
  @Produces({APPLICATION_JSON})
  public Header root() {
    method("header");
    Header header = new Header();
    header.touch();
    return header;
  }

  @GET
  @Path("/")
  @Produces(TEXT_HTML)
  public String summary() {
    return "<ul>"
        + elt("API","application.wadl")
        + elt("header","header")
         + " </ul>";
  }

  private static String elt(String subpath, String text) {
    return String.format("<li><a href=\"%s\">%s</a></ul>\n", subpath, text);
  }
  /**
   * Build a new JSON-marshallable list of string elements
   * @param elements elements
   * @return something that can be returned
   */
  private static List<String> toJsonList(String... elements) {
    return Lists.newArrayList(elements);
  }
}
